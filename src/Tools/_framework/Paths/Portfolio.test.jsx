import { expect, test, vi, beforeEach } from "vitest";
import { mathStuff, Portfolio } from "./Portfolio";
//import { enableFetchMocks } from "jest-fetch-mock";
//enableFetchMocks();
import React from "react";
import { Outlet, RouterProvider, createMemoryRouter } from "react-router";
import { render, screen, cleanup } from "@testing-library/react";
import { RecoilRoot } from "recoil";

//vi.mock("axios");

beforeEach(cleanup);

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

test("again test rendering empty portfolio", async () => {
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

test("2+ 5 = 7", () => {
  expect(mathStuff(2)).toBe(7);
});
