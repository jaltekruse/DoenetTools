// import { enableFetchMocks } from "jest-fetch-mock";
// enableFetchMocks();
import React from "react";
import { Portfolio } from "./Portfolio";
import { Outlet, RouterProvider, createMemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

mock("axios"); 

jest.mock('styled-components', () => (
  jest.requireActual('styled-components/dist/styled-components.browser.esm.js')
));

function createRouterWithOutlet(
  component,
  mockedLoaderData,
  outletContext,
  path,
) {
  return createMemoryRouter(
    [
      {
        path: path,
        element: <Outlet context={outletContext} />,
        children: [
          {
            path: path,
            element: <RecoilRoot>{component}</RecoilRoot>,
            loader: () => mockedLoaderData,
          },
        ],
      },
    ],
    { initialEntries: [path] },
  );
}

test("test rendering empty portfolio", async () => {
  const mockedLoaderData = { publicActivities: [], privateActivities: [] };
  const outletContext = { signedIn: true };

  const router = createRouterWithOutlet(
    <Portfolio />,
    mockedLoaderData,
    outletContext,
    "/portfolio",
  );

  render(<RouterProvider router={router} />);

  await screen.findByRole("button", { name: "Add Activity" });

  expect(screen.getByText("No Public Activities")).exists;
  expect(screen.getByText("No Private Activities")).exists;
});