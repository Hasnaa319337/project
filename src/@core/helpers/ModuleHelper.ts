import * as fs from 'fs'
import { PageOptions } from 'vite-plugin-pages'

class ModuleHelper {
  public static pages(): PageOptions[] {
    let pages: Array<any> = [{ dir: 'src/pages', baseRoute: '' }]
    fs.readdirSync('./src/modules', { withFileTypes: false }).forEach(
      (module) => {
        pages.push({ dir: `src/modules/${module}/pages`, baseRoute: module })
      }
    )
    return pages
  }
}

export default ModuleHelper
