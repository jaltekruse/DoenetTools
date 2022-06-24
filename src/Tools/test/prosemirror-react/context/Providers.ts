import { ExtensionProvider} from './ExtensionProvider'
import { EditorViewProvider } from './EditorViewProvider'
import { PluginsProvider } from './PluginsProvider'
import { PortalProvider } from '@react'
import { AnalyticsProvider } from './analytics/AnalyticsProvider'
import { APIProvider } from './APIProvider'

export interface IProviders {
  analyticsProvider: AnalyticsProvider
  apiProvider: APIProvider
  extensionProvider: ExtensionProvider
  pluginsProvider: PluginsProvider
  portalProvider: PortalProvider
  viewProvider: EditorViewProvider
}

export const createDefaultProviders = () : IProviders => {
  const analyticsProvider = new AnalyticsProvider()
  const apiProvider = new APIProvider()
  const extensionProvider = new ExtensionProvider()
  const pluginsProvider = new PluginsProvider()
  const portalProvider = new PortalProvider()
  const viewProvider = new EditorViewProvider()
  return {
    analyticsProvider,
    apiProvider,
    extensionProvider,
    pluginsProvider,
    portalProvider,
    viewProvider,
  }
}
