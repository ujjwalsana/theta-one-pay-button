import { Injectable } from "@angular/core";

// return the global native browser window object
function _window(): any {
  return window;
}

// injects the native window reference into the module
@Injectable()
export class WindowRef {
  get nativeWindow(): any {
    return _window();
  }
}
