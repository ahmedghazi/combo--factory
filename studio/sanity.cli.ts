import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'nmhfi2e4',
    dataset: 'production',
  },
  studioHost: 'backoffice--combo-factory',
  deployment: {
    appId: 'wzfi7x2vonc2v13spepj8sm9',
    autoUpdates: true,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
})
