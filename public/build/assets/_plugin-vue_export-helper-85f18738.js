import { d as defineComponent, r as ref, o as openBlock, c as createBlock, w as withCtx, k as createElementBlock, l as createCommentVNode, T as Transition, a as createBaseVNode, j as axios$1, G as getDefaultExportFromCjs, x as onMounted, J, H as Toast, t as toDisplayString, I as Oe, F as Fragment, m as renderList, K as normalizeProps, L as mergeProps, f as createVNode, C as renderSlot } from "./app-7261d323.js";
import { r as requiredArgs, t as toDate } from "./index-2530c752.js";
const _hoisted_1$3 = {
  key: 0,
  class: "loader"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "elemento" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Loader",
  setup(__props) {
    const active = ref(false);
    function show() {
      active.value = true;
    }
    function hide() {
      active.value = false;
    }
    window.loader = { show, hide, active };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "loader",
        duration: "300"
      }, {
        default: withCtx(() => [
          active.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, _hoisted_3$1)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray$1 = function(str) {
  const out = [];
  let p = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
      c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }
  return out;
};
const byteArrayToString = function(bytes) {
  const out = [];
  let pos = 0, c = 0;
  while (pos < bytes.length) {
    const c1 = bytes[pos++];
    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      const c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      const c2 = bytes[pos++];
      const c3 = bytes[pos++];
      const c4 = bytes[pos++];
      const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
      out[c++] = String.fromCharCode(55296 + (u >> 10));
      out[c++] = String.fromCharCode(56320 + (u & 1023));
    } else {
      const c2 = bytes[pos++];
      const c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }
  return out.join("");
};
const base64 = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob === "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    this.init_();
    const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    const output = [];
    for (let i = 0; i < input.length; i += 3) {
      const byte1 = input[i];
      const haveByte2 = i + 1 < input.length;
      const byte2 = haveByte2 ? input[i + 1] : 0;
      const haveByte3 = i + 2 < input.length;
      const byte3 = haveByte3 ? input[i + 2] : 0;
      const outByte1 = byte1 >> 2;
      const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
      let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
      let outByte4 = byte3 & 63;
      if (!haveByte3) {
        outByte4 = 64;
        if (!haveByte2) {
          outByte3 = 64;
        }
      }
      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }
    return output.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(input, webSafe) {
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }
    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(input, webSafe) {
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }
    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(input, webSafe) {
    this.init_();
    const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    const output = [];
    for (let i = 0; i < input.length; ) {
      const byte1 = charToByteMap[input.charAt(i++)];
      const haveByte2 = i < input.length;
      const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      const haveByte3 = i < input.length;
      const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      const haveByte4 = i < input.length;
      const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw new DecodeBase64StringError();
      }
      const outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);
      if (byte3 !== 64) {
        const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
        output.push(outByte2);
        if (byte4 !== 64) {
          const outByte3 = byte3 << 6 & 192 | byte4;
          output.push(outByte3);
        }
      }
    }
    return output;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {};
      for (let i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
class DecodeBase64StringError extends Error {
  constructor() {
    super(...arguments);
    this.name = "DecodeBase64StringError";
  }
}
const base64Encode = function(str) {
  const utf8Bytes = stringToByteArray$1(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
const base64urlEncodeWithoutPadding = function(str) {
  return base64Encode(str).replace(/\./g, "");
};
const base64Decode = function(str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getGlobal() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
const getDefaultsFromEnvVariable = () => {
  if (typeof process === "undefined" || typeof process.env === "undefined") {
    return;
  }
  const defaultsJsonString = {}.__FIREBASE_DEFAULTS__;
  if (defaultsJsonString) {
    return JSON.parse(defaultsJsonString);
  }
};
const getDefaultsFromCookie = () => {
  if (typeof document === "undefined") {
    return;
  }
  let match;
  try {
    match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch (e) {
    return;
  }
  const decoded = match && base64Decode(match[1]);
  return decoded && JSON.parse(decoded);
};
const getDefaults = () => {
  try {
    return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
  } catch (e) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
    return;
  }
};
const getDefaultAppConfig = () => {
  var _a;
  return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
  constructor() {
    this.reject = () => {
    };
    this.resolve = () => {
    };
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(callback) {
    return (error, value) => {
      if (error) {
        this.reject(error);
      } else {
        this.resolve(value);
      }
      if (typeof callback === "function") {
        this.promise.catch(() => {
        });
        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  }
}
function isBrowserExtension() {
  const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
  return typeof runtime === "object" && runtime.id !== void 0;
}
function isIndexedDBAvailable() {
  try {
    return typeof indexedDB === "object";
  } catch (e) {
    return false;
  }
}
function validateIndexedDBOpenable() {
  return new Promise((resolve, reject) => {
    try {
      let preExist = true;
      const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
      const request = self.indexedDB.open(DB_CHECK_NAME);
      request.onsuccess = () => {
        request.result.close();
        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }
        resolve(true);
      };
      request.onupgradeneeded = () => {
        preExist = false;
      };
      request.onerror = () => {
        var _a;
        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
      };
    } catch (error) {
      reject(error);
    }
  });
}
function areCookiesEnabled() {
  if (typeof navigator === "undefined" || !navigator.cookieEnabled) {
    return false;
  }
  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_NAME = "FirebaseError";
class FirebaseError extends Error {
  constructor(code, message, customData) {
    super(message);
    this.code = code;
    this.customData = customData;
    this.name = ERROR_NAME;
    Object.setPrototypeOf(this, FirebaseError.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
  }
}
class ErrorFactory {
  constructor(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  create(code, ...data) {
    const customData = data[0] || {};
    const fullCode = `${this.service}/${code}`;
    const template = this.errors[code];
    const message = template ? replaceTemplate(template, customData) : "Error";
    const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
    const error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  }
}
function replaceTemplate(template, data) {
  return template.replace(PATTERN, (_, key) => {
    const value = data[key];
    return value != null ? String(value) : `<${key}?>`;
  });
}
const PATTERN = /\{\$([^}]+)}/g;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  for (const k of aKeys) {
    if (!bKeys.includes(k)) {
      return false;
    }
    const aProp = a[k];
    const bProp = b[k];
    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (const k of bKeys) {
    if (!aKeys.includes(k)) {
      return false;
    }
  }
  return true;
}
function isObject(thing) {
  return thing !== null && typeof thing === "object";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_INTERVAL_MILLIS = 1e3;
const DEFAULT_BACKOFF_FACTOR = 2;
const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
const RANDOM_FACTOR = 0.5;
function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
  const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
  const randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR * currBaseValue * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
    // if we add or subtract.
    (Math.random() - 0.5) * 2
  );
  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}
class Component {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(name2, instanceFactory, type) {
    this.name = name2;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
    this.onInstanceCreated = null;
  }
  setInstantiationMode(mode) {
    this.instantiationMode = mode;
    return this;
  }
  setMultipleInstances(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  }
  setServiceProps(props) {
    this.serviceProps = props;
    return this;
  }
  setInstanceCreatedCallback(callback) {
    this.onInstanceCreated = callback;
    return this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME$1 = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Provider {
  constructor(name2, container) {
    this.name = name2;
    this.container = container;
    this.component = null;
    this.instances = /* @__PURE__ */ new Map();
    this.instancesDeferred = /* @__PURE__ */ new Map();
    this.instancesOptions = /* @__PURE__ */ new Map();
    this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(identifier) {
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      const deferred = new Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          const instance2 = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          if (instance2) {
            deferred.resolve(instance2);
          }
        } catch (e) {
        }
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  }
  getImmediate(options2) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(options2 === null || options2 === void 0 ? void 0 : options2.identifier);
    const optional = (_a = options2 === null || options2 === void 0 ? void 0 : options2.optional) !== null && _a !== void 0 ? _a : false;
    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
      try {
        return this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
      } catch (e) {
        if (optional) {
          return null;
        } else {
          throw e;
        }
      }
    } else {
      if (optional) {
        return null;
      } else {
        throw Error(`Service ${this.name} is not available`);
      }
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(component) {
    if (component.name !== this.name) {
      throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
    }
    if (this.component) {
      throw Error(`Component for ${this.name} has already been provided`);
    }
    this.component = component;
    if (!this.shouldAutoInitialize()) {
      return;
    }
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME$1 });
      } catch (e) {
      }
    }
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      try {
        const instance2 = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
        instanceDeferred.resolve(instance2);
      } catch (e) {
      }
    }
  }
  clearInstance(identifier = DEFAULT_ENTRY_NAME$1) {
    this.instancesDeferred.delete(identifier);
    this.instancesOptions.delete(identifier);
    this.instances.delete(identifier);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const services = Array.from(this.instances.values());
    await Promise.all([
      ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
      ...services.filter((service) => "_delete" in service).map((service) => service._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(identifier = DEFAULT_ENTRY_NAME$1) {
    return this.instances.has(identifier);
  }
  getOptions(identifier = DEFAULT_ENTRY_NAME$1) {
    return this.instancesOptions.get(identifier) || {};
  }
  initialize(opts = {}) {
    const { options: options2 = {} } = opts;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
    }
    if (!this.isComponentSet()) {
      throw Error(`Component ${this.name} has not been registered yet`);
    }
    const instance2 = this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options: options2
    });
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      if (normalizedIdentifier === normalizedDeferredIdentifier) {
        instanceDeferred.resolve(instance2);
      }
    }
    return instance2;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(callback, identifier) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
    existingCallbacks.add(callback);
    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
    const existingInstance = this.instances.get(normalizedIdentifier);
    if (existingInstance) {
      callback(existingInstance, normalizedIdentifier);
    }
    return () => {
      existingCallbacks.delete(callback);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(instance2, identifier) {
    const callbacks = this.onInitCallbacks.get(identifier);
    if (!callbacks) {
      return;
    }
    for (const callback of callbacks) {
      try {
        callback(instance2, identifier);
      } catch (_a) {
      }
    }
  }
  getOrInitializeService({ instanceIdentifier, options: options2 = {} }) {
    let instance2 = this.instances.get(instanceIdentifier);
    if (!instance2 && this.component) {
      instance2 = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options: options2
      });
      this.instances.set(instanceIdentifier, instance2);
      this.instancesOptions.set(instanceIdentifier, options2);
      this.invokeOnInitCallbacks(instance2, instanceIdentifier);
      if (this.component.onInstanceCreated) {
        try {
          this.component.onInstanceCreated(this.container, instanceIdentifier, instance2);
        } catch (_a) {
        }
      }
    }
    return instance2 || null;
  }
  normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME$1) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$1;
    } else {
      return identifier;
    }
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME$1 ? void 0 : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ComponentContainer {
  constructor(name2) {
    this.name = name2;
    this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
    }
    provider.setComponent(component);
  }
  addOrOverwriteComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(name2) {
    if (this.providers.has(name2)) {
      return this.providers.get(name2);
    }
    const provider = new Provider(name2, this);
    this.providers.set(name2, provider);
    return provider;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
const defaultLogLevel = LogLevel.INFO;
const ConsoleMethod = {
  [LogLevel.DEBUG]: "log",
  [LogLevel.VERBOSE]: "log",
  [LogLevel.INFO]: "info",
  [LogLevel.WARN]: "warn",
  [LogLevel.ERROR]: "error"
};
const defaultLogHandler = (instance2, logType, ...args) => {
  if (logType < instance2.logLevel) {
    return;
  }
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const method = ConsoleMethod[logType];
  if (method) {
    console[method](`[${now}]  ${instance2.name}:`, ...args);
  } else {
    throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
  }
};
class Logger {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(name2) {
    this.name = name2;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(val) {
    if (!(val in LogLevel)) {
      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
    }
    this._logLevel = val;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(val) {
    if (typeof val !== "function") {
      throw new TypeError("Value assigned to `logHandler` must be a function");
    }
    this._logHandler = val;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(val) {
    this._userLogHandler = val;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
    this._logHandler(this, LogLevel.DEBUG, ...args);
  }
  log(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
    this._logHandler(this, LogLevel.VERBOSE, ...args);
  }
  info(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
    this._logHandler(this, LogLevel.INFO, ...args);
  }
  warn(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
    this._logHandler(this, LogLevel.WARN, ...args);
  }
  error(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
    this._logHandler(this, LogLevel.ERROR, ...args);
  }
}
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const cursorRequestMap = /* @__PURE__ */ new WeakMap();
const transactionDoneMap = /* @__PURE__ */ new WeakMap();
const transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
const transformCache = /* @__PURE__ */ new WeakMap();
const reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);
function openDB(name2, version2, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name2, version2);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction));
    });
  }
  if (blocked)
    request.addEventListener("blocked", () => blocked());
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking)
      db.addEventListener("versionchange", () => blocking());
  }).catch(() => {
  });
  return openPromise;
}
function deleteDB(name2, { blocked } = {}) {
  const request = indexedDB.deleteDatabase(name2);
  if (blocked)
    request.addEventListener("blocked", () => blocked());
  return wrap(request).then(() => void 0);
}
const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
const writeMethods = ["put", "add", "delete", "clear"];
const cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
  constructor(container) {
    this.container = container;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    const providers = this.container.getProviders();
    return providers.map((provider) => {
      if (isVersionServiceProvider(provider)) {
        const service = provider.getImmediate();
        return `${service.library}/${service.version}`;
      } else {
        return null;
      }
    }).filter((logString) => logString).join(" ");
  }
}
function isVersionServiceProvider(provider) {
  const component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
const name$o = "@firebase/app";
const version$1$1 = "0.9.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger$1 = new Logger("@firebase/app");
const name$n = "@firebase/app-compat";
const name$m = "@firebase/analytics-compat";
const name$l = "@firebase/analytics";
const name$k = "@firebase/app-check-compat";
const name$j = "@firebase/app-check";
const name$i = "@firebase/auth";
const name$h = "@firebase/auth-compat";
const name$g = "@firebase/database";
const name$f = "@firebase/database-compat";
const name$e = "@firebase/functions";
const name$d = "@firebase/functions-compat";
const name$c = "@firebase/installations";
const name$b = "@firebase/installations-compat";
const name$a = "@firebase/messaging";
const name$9 = "@firebase/messaging-compat";
const name$8 = "@firebase/performance";
const name$7 = "@firebase/performance-compat";
const name$6 = "@firebase/remote-config";
const name$5 = "@firebase/remote-config-compat";
const name$4 = "@firebase/storage";
const name$3$1 = "@firebase/storage-compat";
const name$2$1 = "@firebase/firestore";
const name$1$1 = "@firebase/firestore-compat";
const name$p = "firebase";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME = "[DEFAULT]";
const PLATFORM_LOG_STRING = {
  [name$o]: "fire-core",
  [name$n]: "fire-core-compat",
  [name$l]: "fire-analytics",
  [name$m]: "fire-analytics-compat",
  [name$j]: "fire-app-check",
  [name$k]: "fire-app-check-compat",
  [name$i]: "fire-auth",
  [name$h]: "fire-auth-compat",
  [name$g]: "fire-rtdb",
  [name$f]: "fire-rtdb-compat",
  [name$e]: "fire-fn",
  [name$d]: "fire-fn-compat",
  [name$c]: "fire-iid",
  [name$b]: "fire-iid-compat",
  [name$a]: "fire-fcm",
  [name$9]: "fire-fcm-compat",
  [name$8]: "fire-perf",
  [name$7]: "fire-perf-compat",
  [name$6]: "fire-rc",
  [name$5]: "fire-rc-compat",
  [name$4]: "fire-gcs",
  [name$3$1]: "fire-gcs-compat",
  [name$2$1]: "fire-fst",
  [name$1$1]: "fire-fst-compat",
  "fire-js": "fire-js",
  [name$p]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _apps = /* @__PURE__ */ new Map();
const _components = /* @__PURE__ */ new Map();
function _addComponent(app, component) {
  try {
    app.container.addComponent(component);
  } catch (e) {
    logger$1.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
  }
}
function _registerComponent(component) {
  const componentName = component.name;
  if (_components.has(componentName)) {
    logger$1.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component);
  for (const app of _apps.values()) {
    _addComponent(app, component);
  }
  return true;
}
function _getProvider(app, name2) {
  const heartbeatController = app.container.getProvider("heartbeat").getImmediate({ optional: true });
  if (heartbeatController) {
    void heartbeatController.triggerHeartbeat();
  }
  return app.container.getProvider(name2);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS$1 = {
  [
    "no-app"
    /* AppError.NO_APP */
  ]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
  [
    "bad-app-name"
    /* AppError.BAD_APP_NAME */
  ]: "Illegal App name: '{$appName}",
  [
    "duplicate-app"
    /* AppError.DUPLICATE_APP */
  ]: "Firebase App named '{$appName}' already exists with different options or config",
  [
    "app-deleted"
    /* AppError.APP_DELETED */
  ]: "Firebase App named '{$appName}' already deleted",
  [
    "no-options"
    /* AppError.NO_OPTIONS */
  ]: "Need to provide options, when not being deployed to hosting via source.",
  [
    "invalid-app-argument"
    /* AppError.INVALID_APP_ARGUMENT */
  ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  [
    "invalid-log-argument"
    /* AppError.INVALID_LOG_ARGUMENT */
  ]: "First argument to `onLog` must be null or a function.",
  [
    "idb-open"
    /* AppError.IDB_OPEN */
  ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-get"
    /* AppError.IDB_GET */
  ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-set"
    /* AppError.IDB_WRITE */
  ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-delete"
    /* AppError.IDB_DELETE */
  ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
};
const ERROR_FACTORY$3 = new ErrorFactory("app", "Firebase", ERRORS$1);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
  constructor(options2, config, container) {
    this._isDeleted = false;
    this._options = Object.assign({}, options2);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new Component(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    this.checkDestroyed();
    return this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(val) {
    this.checkDestroyed();
    this._automaticDataCollectionEnabled = val;
  }
  get name() {
    this.checkDestroyed();
    return this._name;
  }
  get options() {
    this.checkDestroyed();
    return this._options;
  }
  get config() {
    this.checkDestroyed();
    return this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(val) {
    this._isDeleted = val;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY$3.create("app-deleted", { appName: this._name });
    }
  }
}
function initializeApp(_options, rawConfig = {}) {
  let options2 = _options;
  if (typeof rawConfig !== "object") {
    const name3 = rawConfig;
    rawConfig = { name: name3 };
  }
  const config = Object.assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
  const name2 = config.name;
  if (typeof name2 !== "string" || !name2) {
    throw ERROR_FACTORY$3.create("bad-app-name", {
      appName: String(name2)
    });
  }
  options2 || (options2 = getDefaultAppConfig());
  if (!options2) {
    throw ERROR_FACTORY$3.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  }
  const existingApp = _apps.get(name2);
  if (existingApp) {
    if (deepEqual(options2, existingApp.options) && deepEqual(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY$3.create("duplicate-app", { appName: name2 });
    }
  }
  const container = new ComponentContainer(name2);
  for (const component of _components.values()) {
    container.addComponent(component);
  }
  const newApp = new FirebaseAppImpl(options2, config, container);
  _apps.set(name2, newApp);
  return newApp;
}
function getApp(name2 = DEFAULT_ENTRY_NAME) {
  const app = _apps.get(name2);
  if (!app && name2 === DEFAULT_ENTRY_NAME) {
    return initializeApp();
  }
  if (!app) {
    throw ERROR_FACTORY$3.create("no-app", { appName: name2 });
  }
  return app;
}
function registerVersion(libraryKeyOrName, version2, variant) {
  var _a;
  let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version2.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning = [
      `Unable to register library "${library}" with version "${version2}":`
    ];
    if (libraryMismatch) {
      warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
    }
    if (libraryMismatch && versionMismatch) {
      warning.push("and");
    }
    if (versionMismatch) {
      warning.push(`version name "${version2}" contains illegal characters (whitespace or "/")`);
    }
    logger$1.warn(warning.join(" "));
    return;
  }
  _registerComponent(new Component(
    `${library}-version`,
    () => ({ library, version: version2 }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DB_NAME = "firebase-heartbeat-database";
const DB_VERSION = 1;
const STORE_NAME = "firebase-heartbeat-store";
let dbPromise$2 = null;
function getDbPromise$2() {
  if (!dbPromise$2) {
    dbPromise$2 = openDB(DB_NAME, DB_VERSION, {
      upgrade: (db, oldVersion) => {
        switch (oldVersion) {
          case 0:
            db.createObjectStore(STORE_NAME);
        }
      }
    }).catch((e) => {
      throw ERROR_FACTORY$3.create("idb-open", {
        originalErrorMessage: e.message
      });
    });
  }
  return dbPromise$2;
}
async function readHeartbeatsFromIndexedDB(app) {
  try {
    const db = await getDbPromise$2();
    return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app));
  } catch (e) {
    if (e instanceof FirebaseError) {
      logger$1.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY$3.create("idb-get", {
        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
      });
      logger$1.warn(idbGetError.message);
    }
  }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
  try {
    const db = await getDbPromise$2();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(STORE_NAME);
    await objectStore.put(heartbeatObject, computeKey(app));
    return tx.done;
  } catch (e) {
    if (e instanceof FirebaseError) {
      logger$1.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY$3.create("idb-set", {
        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
      });
      logger$1.warn(idbGetError.message);
    }
  }
}
function computeKey(app) {
  return `${app.name}!${app.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MAX_HEADER_BYTES = 1024;
const STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
class HeartbeatServiceImpl {
  constructor(container) {
    this.container = container;
    this._heartbeatsCache = null;
    const app = this.container.getProvider("app").getImmediate();
    this._storage = new HeartbeatStorageImpl(app);
    this._heartbeatsCachePromise = this._storage.read().then((result) => {
      this._heartbeatsCache = result;
      return result;
    });
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    const platformLogger = this.container.getProvider("platform-logger").getImmediate();
    const agent = platformLogger.getPlatformInfoString();
    const date = getUTCDateString();
    if (this._heartbeatsCache === null) {
      this._heartbeatsCache = await this._heartbeatsCachePromise;
    }
    if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
      return;
    } else {
      this._heartbeatsCache.heartbeats.push({ date, agent });
    }
    this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
      const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
      const now = Date.now();
      return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
    });
    return this._storage.overwrite(this._heartbeatsCache);
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    if (this._heartbeatsCache === null) {
      await this._heartbeatsCachePromise;
    }
    if (this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) {
      return "";
    }
    const date = getUTCDateString();
    const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
    const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
    this._heartbeatsCache.lastSentHeartbeatDate = date;
    if (unsentEntries.length > 0) {
      this._heartbeatsCache.heartbeats = unsentEntries;
      await this._storage.overwrite(this._heartbeatsCache);
    } else {
      this._heartbeatsCache.heartbeats = [];
      void this._storage.overwrite(this._heartbeatsCache);
    }
    return headerString;
  }
}
function getUTCDateString() {
  const today = /* @__PURE__ */ new Date();
  return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
  const heartbeatsToSend = [];
  let unsentEntries = heartbeatsCache.slice();
  for (const singleDateHeartbeat of heartbeatsCache) {
    const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
    if (!heartbeatEntry) {
      heartbeatsToSend.push({
        agent: singleDateHeartbeat.agent,
        dates: [singleDateHeartbeat.date]
      });
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatsToSend.pop();
        break;
      }
    } else {
      heartbeatEntry.dates.push(singleDateHeartbeat.date);
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatEntry.dates.pop();
        break;
      }
    }
    unsentEntries = unsentEntries.slice(1);
  }
  return {
    heartbeatsToSend,
    unsentEntries
  };
}
class HeartbeatStorageImpl {
  constructor(app) {
    this.app = app;
    this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    if (!isIndexedDBAvailable()) {
      return false;
    } else {
      return validateIndexedDBOpenable().then(() => true).catch(() => false);
    }
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return { heartbeats: [] };
    } else {
      const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
      return idbHeartbeatObject || { heartbeats: [] };
    }
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(heartbeatsObject) {
    var _a;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: heartbeatsObject.heartbeats
      });
    }
  }
  // add heartbeats
  async add(heartbeatsObject) {
    var _a;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: [
          ...existingHeartbeatsObject.heartbeats,
          ...heartbeatsObject.heartbeats
        ]
      });
    }
  }
}
function countBytes(heartbeatsCache) {
  return base64urlEncodeWithoutPadding(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
  ).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
  _registerComponent(new Component(
    "platform-logger",
    (container) => new PlatformLoggerServiceImpl(container),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
  _registerComponent(new Component(
    "heartbeat",
    (container) => new HeartbeatServiceImpl(container),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
  registerVersion(name$o, version$1$1, variant);
  registerVersion(name$o, version$1$1, "esm2017");
  registerVersion("fire-js", "");
}
registerCoreComponents("");
var name$3 = "firebase";
var version$3 = "9.18.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
registerVersion(name$3, version$3, "app");
const name$2 = "@firebase/installations";
const version$2 = "0.6.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PENDING_TIMEOUT_MS = 1e4;
const PACKAGE_VERSION = `w:${version$2}`;
const INTERNAL_AUTH_VERSION = "FIS_v2";
const INSTALLATIONS_API_URL = "https://firebaseinstallations.googleapis.com/v1";
const TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1e3;
const SERVICE = "installations";
const SERVICE_NAME = "Installations";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_DESCRIPTION_MAP = {
  [
    "missing-app-config-values"
    /* ErrorCode.MISSING_APP_CONFIG_VALUES */
  ]: 'Missing App configuration value: "{$valueName}"',
  [
    "not-registered"
    /* ErrorCode.NOT_REGISTERED */
  ]: "Firebase Installation is not registered.",
  [
    "installation-not-found"
    /* ErrorCode.INSTALLATION_NOT_FOUND */
  ]: "Firebase Installation not found.",
  [
    "request-failed"
    /* ErrorCode.REQUEST_FAILED */
  ]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  [
    "app-offline"
    /* ErrorCode.APP_OFFLINE */
  ]: "Could not process request. Application offline.",
  [
    "delete-pending-registration"
    /* ErrorCode.DELETE_PENDING_REGISTRATION */
  ]: "Can't delete installation while there is a pending registration request."
};
const ERROR_FACTORY$2 = new ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
function isServerError(error) {
  return error instanceof FirebaseError && error.code.includes(
    "request-failed"
    /* ErrorCode.REQUEST_FAILED */
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint({ projectId }) {
  return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
}
function extractAuthTokenInfoFromResponse(response) {
  return {
    token: response.token,
    requestStatus: 2,
    expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
    creationTime: Date.now()
  };
}
async function getErrorFromResponse(requestName, response) {
  const responseJson = await response.json();
  const errorData = responseJson.error;
  return ERROR_FACTORY$2.create("request-failed", {
    requestName,
    serverCode: errorData.code,
    serverMessage: errorData.message,
    serverStatus: errorData.status
  });
}
function getHeaders$2({ apiKey }) {
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
function getHeadersWithAuth(appConfig, { refreshToken }) {
  const headers = getHeaders$2(appConfig);
  headers.append("Authorization", getAuthorizationHeader(refreshToken));
  return headers;
}
async function retryIfServerError(fn) {
  const result = await fn();
  if (result.status >= 500 && result.status < 600) {
    return fn();
  }
  return result;
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
  return Number(responseExpiresIn.replace("s", "000"));
}
function getAuthorizationHeader(refreshToken) {
  return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function createInstallationRequest({ appConfig, heartbeatServiceProvider }, { fid }) {
  const endpoint = getInstallationsEndpoint(appConfig);
  const headers = getHeaders$2(appConfig);
  const heartbeatService = heartbeatServiceProvider.getImmediate({
    optional: true
  });
  if (heartbeatService) {
    const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
    if (heartbeatsHeader) {
      headers.append("x-firebase-client", heartbeatsHeader);
    }
  }
  const body = {
    fid,
    authVersion: INTERNAL_AUTH_VERSION,
    appId: appConfig.appId,
    sdkVersion: PACKAGE_VERSION
  };
  const request = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  };
  const response = await retryIfServerError(() => fetch(endpoint, request));
  if (response.ok) {
    const responseValue = await response.json();
    const registeredInstallationEntry = {
      fid: responseValue.fid || fid,
      registrationStatus: 2,
      refreshToken: responseValue.refreshToken,
      authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
    };
    return registeredInstallationEntry;
  } else {
    throw await getErrorFromResponse("Create Installation", response);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
  const b64 = btoa(String.fromCharCode(...array));
  return b64.replace(/\+/g, "-").replace(/\//g, "_");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
const INVALID_FID = "";
function generateFid() {
  try {
    const fidByteArray = new Uint8Array(17);
    const crypto = self.crypto || self.msCrypto;
    crypto.getRandomValues(fidByteArray);
    fidByteArray[0] = 112 + fidByteArray[0] % 16;
    const fid = encode(fidByteArray);
    return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
  } catch (_a) {
    return INVALID_FID;
  }
}
function encode(fidByteArray) {
  const b64String = bufferToBase64UrlSafe(fidByteArray);
  return b64String.substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getKey$1(appConfig) {
  return `${appConfig.appName}!${appConfig.appId}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fidChangeCallbacks = /* @__PURE__ */ new Map();
function fidChanged(appConfig, fid) {
  const key = getKey$1(appConfig);
  callFidChangeCallbacks(key, fid);
  broadcastFidChange(key, fid);
}
function callFidChangeCallbacks(key, fid) {
  const callbacks = fidChangeCallbacks.get(key);
  if (!callbacks) {
    return;
  }
  for (const callback of callbacks) {
    callback(fid);
  }
}
function broadcastFidChange(key, fid) {
  const channel2 = getBroadcastChannel();
  if (channel2) {
    channel2.postMessage({ key, fid });
  }
  closeBroadcastChannel();
}
let broadcastChannel = null;
function getBroadcastChannel() {
  if (!broadcastChannel && "BroadcastChannel" in self) {
    broadcastChannel = new BroadcastChannel("[Firebase] FID Change");
    broadcastChannel.onmessage = (e) => {
      callFidChangeCallbacks(e.data.key, e.data.fid);
    };
  }
  return broadcastChannel;
}
function closeBroadcastChannel() {
  if (fidChangeCallbacks.size === 0 && broadcastChannel) {
    broadcastChannel.close();
    broadcastChannel = null;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DATABASE_NAME$1 = "firebase-installations-database";
const DATABASE_VERSION$1 = 1;
const OBJECT_STORE_NAME$1 = "firebase-installations-store";
let dbPromise$1 = null;
function getDbPromise$1() {
  if (!dbPromise$1) {
    dbPromise$1 = openDB(DATABASE_NAME$1, DATABASE_VERSION$1, {
      upgrade: (db, oldVersion) => {
        switch (oldVersion) {
          case 0:
            db.createObjectStore(OBJECT_STORE_NAME$1);
        }
      }
    });
  }
  return dbPromise$1;
}
async function set(appConfig, value) {
  const key = getKey$1(appConfig);
  const db = await getDbPromise$1();
  const tx = db.transaction(OBJECT_STORE_NAME$1, "readwrite");
  const objectStore = tx.objectStore(OBJECT_STORE_NAME$1);
  const oldValue = await objectStore.get(key);
  await objectStore.put(value, key);
  await tx.done;
  if (!oldValue || oldValue.fid !== value.fid) {
    fidChanged(appConfig, value.fid);
  }
  return value;
}
async function remove(appConfig) {
  const key = getKey$1(appConfig);
  const db = await getDbPromise$1();
  const tx = db.transaction(OBJECT_STORE_NAME$1, "readwrite");
  await tx.objectStore(OBJECT_STORE_NAME$1).delete(key);
  await tx.done;
}
async function update(appConfig, updateFn) {
  const key = getKey$1(appConfig);
  const db = await getDbPromise$1();
  const tx = db.transaction(OBJECT_STORE_NAME$1, "readwrite");
  const store = tx.objectStore(OBJECT_STORE_NAME$1);
  const oldValue = await store.get(key);
  const newValue = updateFn(oldValue);
  if (newValue === void 0) {
    await store.delete(key);
  } else {
    await store.put(newValue, key);
  }
  await tx.done;
  if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
    fidChanged(appConfig, newValue.fid);
  }
  return newValue;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function getInstallationEntry(installations) {
  let registrationPromise;
  const installationEntry = await update(installations.appConfig, (oldEntry) => {
    const installationEntry2 = updateOrCreateInstallationEntry(oldEntry);
    const entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry2);
    registrationPromise = entryWithPromise.registrationPromise;
    return entryWithPromise.installationEntry;
  });
  if (installationEntry.fid === INVALID_FID) {
    return { installationEntry: await registrationPromise };
  }
  return {
    installationEntry,
    registrationPromise
  };
}
function updateOrCreateInstallationEntry(oldEntry) {
  const entry = oldEntry || {
    fid: generateFid(),
    registrationStatus: 0
    /* RequestStatus.NOT_STARTED */
  };
  return clearTimedOutRequest(entry);
}
function triggerRegistrationIfNecessary(installations, installationEntry) {
  if (installationEntry.registrationStatus === 0) {
    if (!navigator.onLine) {
      const registrationPromiseWithError = Promise.reject(ERROR_FACTORY$2.create(
        "app-offline"
        /* ErrorCode.APP_OFFLINE */
      ));
      return {
        installationEntry,
        registrationPromise: registrationPromiseWithError
      };
    }
    const inProgressEntry = {
      fid: installationEntry.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    };
    const registrationPromise = registerInstallation(installations, inProgressEntry);
    return { installationEntry: inProgressEntry, registrationPromise };
  } else if (installationEntry.registrationStatus === 1) {
    return {
      installationEntry,
      registrationPromise: waitUntilFidRegistration(installations)
    };
  } else {
    return { installationEntry };
  }
}
async function registerInstallation(installations, installationEntry) {
  try {
    const registeredInstallationEntry = await createInstallationRequest(installations, installationEntry);
    return set(installations.appConfig, registeredInstallationEntry);
  } catch (e) {
    if (isServerError(e) && e.customData.serverCode === 409) {
      await remove(installations.appConfig);
    } else {
      await set(installations.appConfig, {
        fid: installationEntry.fid,
        registrationStatus: 0
        /* RequestStatus.NOT_STARTED */
      });
    }
    throw e;
  }
}
async function waitUntilFidRegistration(installations) {
  let entry = await updateInstallationRequest(installations.appConfig);
  while (entry.registrationStatus === 1) {
    await sleep(100);
    entry = await updateInstallationRequest(installations.appConfig);
  }
  if (entry.registrationStatus === 0) {
    const { installationEntry, registrationPromise } = await getInstallationEntry(installations);
    if (registrationPromise) {
      return registrationPromise;
    } else {
      return installationEntry;
    }
  }
  return entry;
}
function updateInstallationRequest(appConfig) {
  return update(appConfig, (oldEntry) => {
    if (!oldEntry) {
      throw ERROR_FACTORY$2.create(
        "installation-not-found"
        /* ErrorCode.INSTALLATION_NOT_FOUND */
      );
    }
    return clearTimedOutRequest(oldEntry);
  });
}
function clearTimedOutRequest(entry) {
  if (hasInstallationRequestTimedOut(entry)) {
    return {
      fid: entry.fid,
      registrationStatus: 0
      /* RequestStatus.NOT_STARTED */
    };
  }
  return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
  return installationEntry.registrationStatus === 1 && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function generateAuthTokenRequest({ appConfig, heartbeatServiceProvider }, installationEntry) {
  const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
  const headers = getHeadersWithAuth(appConfig, installationEntry);
  const heartbeatService = heartbeatServiceProvider.getImmediate({
    optional: true
  });
  if (heartbeatService) {
    const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
    if (heartbeatsHeader) {
      headers.append("x-firebase-client", heartbeatsHeader);
    }
  }
  const body = {
    installation: {
      sdkVersion: PACKAGE_VERSION,
      appId: appConfig.appId
    }
  };
  const request = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  };
  const response = await retryIfServerError(() => fetch(endpoint, request));
  if (response.ok) {
    const responseValue = await response.json();
    const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
    return completedAuthToken;
  } else {
    throw await getErrorFromResponse("Generate Auth Token", response);
  }
}
function getGenerateAuthTokenEndpoint(appConfig, { fid }) {
  return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function refreshAuthToken(installations, forceRefresh = false) {
  let tokenPromise;
  const entry = await update(installations.appConfig, (oldEntry) => {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY$2.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    }
    const oldAuthToken = oldEntry.authToken;
    if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
      return oldEntry;
    } else if (oldAuthToken.requestStatus === 1) {
      tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
      return oldEntry;
    } else {
      if (!navigator.onLine) {
        throw ERROR_FACTORY$2.create(
          "app-offline"
          /* ErrorCode.APP_OFFLINE */
        );
      }
      const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
      tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
      return inProgressEntry;
    }
  });
  const authToken = tokenPromise ? await tokenPromise : entry.authToken;
  return authToken;
}
async function waitUntilAuthTokenRequest(installations, forceRefresh) {
  let entry = await updateAuthTokenRequest(installations.appConfig);
  while (entry.authToken.requestStatus === 1) {
    await sleep(100);
    entry = await updateAuthTokenRequest(installations.appConfig);
  }
  const authToken = entry.authToken;
  if (authToken.requestStatus === 0) {
    return refreshAuthToken(installations, forceRefresh);
  } else {
    return authToken;
  }
}
function updateAuthTokenRequest(appConfig) {
  return update(appConfig, (oldEntry) => {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY$2.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    }
    const oldAuthToken = oldEntry.authToken;
    if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
      return Object.assign(Object.assign({}, oldEntry), { authToken: {
        requestStatus: 0
        /* RequestStatus.NOT_STARTED */
      } });
    }
    return oldEntry;
  });
}
async function fetchAuthTokenFromServer(installations, installationEntry) {
  try {
    const authToken = await generateAuthTokenRequest(installations, installationEntry);
    const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken });
    await set(installations.appConfig, updatedInstallationEntry);
    return authToken;
  } catch (e) {
    if (isServerError(e) && (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
      await remove(installations.appConfig);
    } else {
      const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken: {
        requestStatus: 0
        /* RequestStatus.NOT_STARTED */
      } });
      await set(installations.appConfig, updatedInstallationEntry);
    }
    throw e;
  }
}
function isEntryRegistered(installationEntry) {
  return installationEntry !== void 0 && installationEntry.registrationStatus === 2;
}
function isAuthTokenValid(authToken) {
  return authToken.requestStatus === 2 && !isAuthTokenExpired(authToken);
}
function isAuthTokenExpired(authToken) {
  const now = Date.now();
  return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
function makeAuthTokenRequestInProgressEntry(oldEntry) {
  const inProgressAuthToken = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, oldEntry), { authToken: inProgressAuthToken });
}
function hasAuthTokenRequestTimedOut(authToken) {
  return authToken.requestStatus === 1 && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function getId(installations) {
  const installationsImpl = installations;
  const { installationEntry, registrationPromise } = await getInstallationEntry(installationsImpl);
  if (registrationPromise) {
    registrationPromise.catch(console.error);
  } else {
    refreshAuthToken(installationsImpl).catch(console.error);
  }
  return installationEntry.fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function getToken$2(installations, forceRefresh = false) {
  const installationsImpl = installations;
  await completeInstallationRegistration(installationsImpl);
  const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
  return authToken.token;
}
async function completeInstallationRegistration(installations) {
  const { registrationPromise } = await getInstallationEntry(installations);
  if (registrationPromise) {
    await registrationPromise;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig$1(app) {
  if (!app || !app.options) {
    throw getMissingValueError$1("App Configuration");
  }
  if (!app.name) {
    throw getMissingValueError$1("App Name");
  }
  const configKeys = [
    "projectId",
    "apiKey",
    "appId"
  ];
  for (const keyName of configKeys) {
    if (!app.options[keyName]) {
      throw getMissingValueError$1(keyName);
    }
  }
  return {
    appName: app.name,
    projectId: app.options.projectId,
    apiKey: app.options.apiKey,
    appId: app.options.appId
  };
}
function getMissingValueError$1(valueName) {
  return ERROR_FACTORY$2.create("missing-app-config-values", {
    valueName
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const INSTALLATIONS_NAME = "installations";
const INSTALLATIONS_NAME_INTERNAL = "installations-internal";
const publicFactory = (container) => {
  const app = container.getProvider("app").getImmediate();
  const appConfig = extractAppConfig$1(app);
  const heartbeatServiceProvider = _getProvider(app, "heartbeat");
  const installationsImpl = {
    app,
    appConfig,
    heartbeatServiceProvider,
    _delete: () => Promise.resolve()
  };
  return installationsImpl;
};
const internalFactory = (container) => {
  const app = container.getProvider("app").getImmediate();
  const installations = _getProvider(app, INSTALLATIONS_NAME).getImmediate();
  const installationsInternal = {
    getId: () => getId(installations),
    getToken: (forceRefresh) => getToken$2(installations, forceRefresh)
  };
  return installationsInternal;
};
function registerInstallations() {
  _registerComponent(new Component(
    INSTALLATIONS_NAME,
    publicFactory,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ));
  _registerComponent(new Component(
    INSTALLATIONS_NAME_INTERNAL,
    internalFactory,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
}
registerInstallations();
registerVersion(name$2, version$2);
registerVersion(name$2, version$2, "esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ANALYTICS_TYPE = "analytics";
const GA_FID_KEY = "firebase_id";
const ORIGIN_KEY = "origin";
const FETCH_TIMEOUT_MILLIS = 60 * 1e3;
const DYNAMIC_CONFIG_URL = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig";
const GTAG_URL = "https://www.googletagmanager.com/gtag/js";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new Logger("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function promiseAllSettled(promises) {
  return Promise.all(promises.map((promise) => promise.catch((e) => e)));
}
function insertScriptTag(dataLayerName2, measurementId) {
  const script = document.createElement("script");
  script.src = `${GTAG_URL}?l=${dataLayerName2}&id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);
}
function getOrCreateDataLayer(dataLayerName2) {
  let dataLayer = [];
  if (Array.isArray(window[dataLayerName2])) {
    dataLayer = window[dataLayerName2];
  } else {
    window[dataLayerName2] = dataLayer;
  }
  return dataLayer;
}
async function gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams) {
  const correspondingAppId = measurementIdToAppId2[measurementId];
  try {
    if (correspondingAppId) {
      await initializationPromisesMap2[correspondingAppId];
    } else {
      const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList2);
      const foundConfig = dynamicConfigResults.find((config) => config.measurementId === measurementId);
      if (foundConfig) {
        await initializationPromisesMap2[foundConfig.appId];
      }
    }
  } catch (e) {
    logger.error(e);
  }
  gtagCore("config", measurementId, gtagParams);
}
async function gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams) {
  try {
    let initializationPromisesToWaitFor = [];
    if (gtagParams && gtagParams["send_to"]) {
      let gaSendToList = gtagParams["send_to"];
      if (!Array.isArray(gaSendToList)) {
        gaSendToList = [gaSendToList];
      }
      const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList2);
      for (const sendToId of gaSendToList) {
        const foundConfig = dynamicConfigResults.find((config) => config.measurementId === sendToId);
        const initializationPromise = foundConfig && initializationPromisesMap2[foundConfig.appId];
        if (initializationPromise) {
          initializationPromisesToWaitFor.push(initializationPromise);
        } else {
          initializationPromisesToWaitFor = [];
          break;
        }
      }
    }
    if (initializationPromisesToWaitFor.length === 0) {
      initializationPromisesToWaitFor = Object.values(initializationPromisesMap2);
    }
    await Promise.all(initializationPromisesToWaitFor);
    gtagCore("event", measurementId, gtagParams || {});
  } catch (e) {
    logger.error(e);
  }
}
function wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2) {
  async function gtagWrapper(command, idOrNameOrParams, gtagParams) {
    try {
      if (command === "event") {
        await gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, idOrNameOrParams, gtagParams);
      } else if (command === "config") {
        await gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, idOrNameOrParams, gtagParams);
      } else if (command === "consent") {
        gtagCore("consent", "update", gtagParams);
      } else {
        gtagCore("set", idOrNameOrParams);
      }
    } catch (e) {
      logger.error(e);
    }
  }
  return gtagWrapper;
}
function wrapOrCreateGtag(initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, dataLayerName2, gtagFunctionName) {
  let gtagCore = function(..._args) {
    window[dataLayerName2].push(arguments);
  };
  if (window[gtagFunctionName] && typeof window[gtagFunctionName] === "function") {
    gtagCore = window[gtagFunctionName];
  }
  window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2);
  return {
    gtagCore,
    wrappedGtag: window[gtagFunctionName]
  };
}
function findGtagScriptOnPage(dataLayerName2) {
  const scriptTags = window.document.getElementsByTagName("script");
  for (const tag of Object.values(scriptTags)) {
    if (tag.src && tag.src.includes(GTAG_URL) && tag.src.includes(dataLayerName2)) {
      return tag;
    }
  }
  return null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
  [
    "already-exists"
    /* AnalyticsError.ALREADY_EXISTS */
  ]: "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
  [
    "already-initialized"
    /* AnalyticsError.ALREADY_INITIALIZED */
  ]: "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
  [
    "already-initialized-settings"
    /* AnalyticsError.ALREADY_INITIALIZED_SETTINGS */
  ]: "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
  [
    "interop-component-reg-failed"
    /* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */
  ]: "Firebase Analytics Interop Component failed to instantiate: {$reason}",
  [
    "invalid-analytics-context"
    /* AnalyticsError.INVALID_ANALYTICS_CONTEXT */
  ]: "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  [
    "indexeddb-unavailable"
    /* AnalyticsError.INDEXEDDB_UNAVAILABLE */
  ]: "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  [
    "fetch-throttle"
    /* AnalyticsError.FETCH_THROTTLE */
  ]: "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
  [
    "config-fetch-failed"
    /* AnalyticsError.CONFIG_FETCH_FAILED */
  ]: "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
  [
    "no-api-key"
    /* AnalyticsError.NO_API_KEY */
  ]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
  [
    "no-app-id"
    /* AnalyticsError.NO_APP_ID */
  ]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'
};
const ERROR_FACTORY$1 = new ErrorFactory("analytics", "Analytics", ERRORS);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const LONG_RETRY_FACTOR = 30;
const BASE_INTERVAL_MILLIS = 1e3;
class RetryData {
  constructor(throttleMetadata = {}, intervalMillis = BASE_INTERVAL_MILLIS) {
    this.throttleMetadata = throttleMetadata;
    this.intervalMillis = intervalMillis;
  }
  getThrottleMetadata(appId) {
    return this.throttleMetadata[appId];
  }
  setThrottleMetadata(appId, metadata) {
    this.throttleMetadata[appId] = metadata;
  }
  deleteThrottleMetadata(appId) {
    delete this.throttleMetadata[appId];
  }
}
const defaultRetryData = new RetryData();
function getHeaders$1(apiKey) {
  return new Headers({
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
async function fetchDynamicConfig(appFields) {
  var _a;
  const { appId, apiKey } = appFields;
  const request = {
    method: "GET",
    headers: getHeaders$1(apiKey)
  };
  const appUrl = DYNAMIC_CONFIG_URL.replace("{app-id}", appId);
  const response = await fetch(appUrl, request);
  if (response.status !== 200 && response.status !== 304) {
    let errorMessage = "";
    try {
      const jsonResponse = await response.json();
      if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
        errorMessage = jsonResponse.error.message;
      }
    } catch (_ignored) {
    }
    throw ERROR_FACTORY$1.create("config-fetch-failed", {
      httpStatus: response.status,
      responseMessage: errorMessage
    });
  }
  return response.json();
}
async function fetchDynamicConfigWithRetry(app, retryData = defaultRetryData, timeoutMillis) {
  const { appId, apiKey, measurementId } = app.options;
  if (!appId) {
    throw ERROR_FACTORY$1.create(
      "no-app-id"
      /* AnalyticsError.NO_APP_ID */
    );
  }
  if (!apiKey) {
    if (measurementId) {
      return {
        measurementId,
        appId
      };
    }
    throw ERROR_FACTORY$1.create(
      "no-api-key"
      /* AnalyticsError.NO_API_KEY */
    );
  }
  const throttleMetadata = retryData.getThrottleMetadata(appId) || {
    backoffCount: 0,
    throttleEndTimeMillis: Date.now()
  };
  const signal = new AnalyticsAbortSignal();
  setTimeout(async () => {
    signal.abort();
  }, timeoutMillis !== void 0 ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
  return attemptFetchDynamicConfigWithRetry({ appId, apiKey, measurementId }, throttleMetadata, signal, retryData);
}
async function attemptFetchDynamicConfigWithRetry(appFields, { throttleEndTimeMillis, backoffCount }, signal, retryData = defaultRetryData) {
  var _a;
  const { appId, measurementId } = appFields;
  try {
    await setAbortableTimeout(signal, throttleEndTimeMillis);
  } catch (e) {
    if (measurementId) {
      logger.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${measurementId} provided in the "measurementId" field in the local Firebase config. [${e === null || e === void 0 ? void 0 : e.message}]`);
      return { appId, measurementId };
    }
    throw e;
  }
  try {
    const response = await fetchDynamicConfig(appFields);
    retryData.deleteThrottleMetadata(appId);
    return response;
  } catch (e) {
    const error = e;
    if (!isRetriableError(error)) {
      retryData.deleteThrottleMetadata(appId);
      if (measurementId) {
        logger.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${measurementId} provided in the "measurementId" field in the local Firebase config. [${error === null || error === void 0 ? void 0 : error.message}]`);
        return { appId, measurementId };
      } else {
        throw e;
      }
    }
    const backoffMillis = Number((_a = error === null || error === void 0 ? void 0 : error.customData) === null || _a === void 0 ? void 0 : _a.httpStatus) === 503 ? calculateBackoffMillis(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : calculateBackoffMillis(backoffCount, retryData.intervalMillis);
    const throttleMetadata = {
      throttleEndTimeMillis: Date.now() + backoffMillis,
      backoffCount: backoffCount + 1
    };
    retryData.setThrottleMetadata(appId, throttleMetadata);
    logger.debug(`Calling attemptFetch again in ${backoffMillis} millis`);
    return attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData);
  }
}
function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise((resolve, reject) => {
    const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    const timeout = setTimeout(resolve, backoffMillis);
    signal.addEventListener(() => {
      clearTimeout(timeout);
      reject(ERROR_FACTORY$1.create("fetch-throttle", {
        throttleEndTimeMillis
      }));
    });
  });
}
function isRetriableError(e) {
  if (!(e instanceof FirebaseError) || !e.customData) {
    return false;
  }
  const httpStatus = Number(e.customData["httpStatus"]);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
class AnalyticsAbortSignal {
  constructor() {
    this.listeners = [];
  }
  addEventListener(listener) {
    this.listeners.push(listener);
  }
  abort() {
    this.listeners.forEach((listener) => listener());
  }
}
async function logEvent$1(gtagFunction, initializationPromise, eventName, eventParams, options2) {
  if (options2 && options2.global) {
    gtagFunction("event", eventName, eventParams);
    return;
  } else {
    const measurementId = await initializationPromise;
    const params = Object.assign(Object.assign({}, eventParams), { "send_to": measurementId });
    gtagFunction("event", eventName, params);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function validateIndexedDB() {
  if (!isIndexedDBAvailable()) {
    logger.warn(ERROR_FACTORY$1.create("indexeddb-unavailable", {
      errorInfo: "IndexedDB is not available in this environment."
    }).message);
    return false;
  } else {
    try {
      await validateIndexedDBOpenable();
    } catch (e) {
      logger.warn(ERROR_FACTORY$1.create("indexeddb-unavailable", {
        errorInfo: e === null || e === void 0 ? void 0 : e.toString()
      }).message);
      return false;
    }
  }
  return true;
}
async function _initializeAnalytics(app, dynamicConfigPromisesList2, measurementIdToAppId2, installations, gtagCore, dataLayerName2, options2) {
  var _a;
  const dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
  dynamicConfigPromise.then((config) => {
    measurementIdToAppId2[config.measurementId] = config.appId;
    if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
      logger.warn(`The measurement ID in the local Firebase config (${app.options.measurementId}) does not match the measurement ID fetched from the server (${config.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`);
    }
  }).catch((e) => logger.error(e));
  dynamicConfigPromisesList2.push(dynamicConfigPromise);
  const fidPromise = validateIndexedDB().then((envIsValid) => {
    if (envIsValid) {
      return installations.getId();
    } else {
      return void 0;
    }
  });
  const [dynamicConfig, fid] = await Promise.all([
    dynamicConfigPromise,
    fidPromise
  ]);
  if (!findGtagScriptOnPage(dataLayerName2)) {
    insertScriptTag(dataLayerName2, dynamicConfig.measurementId);
  }
  gtagCore("js", /* @__PURE__ */ new Date());
  const configProperties = (_a = options2 === null || options2 === void 0 ? void 0 : options2.config) !== null && _a !== void 0 ? _a : {};
  configProperties[ORIGIN_KEY] = "firebase";
  configProperties.update = true;
  if (fid != null) {
    configProperties[GA_FID_KEY] = fid;
  }
  gtagCore("config", dynamicConfig.measurementId, configProperties);
  return dynamicConfig.measurementId;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AnalyticsService {
  constructor(app) {
    this.app = app;
  }
  _delete() {
    delete initializationPromisesMap[this.app.options.appId];
    return Promise.resolve();
  }
}
let initializationPromisesMap = {};
let dynamicConfigPromisesList = [];
const measurementIdToAppId = {};
let dataLayerName = "dataLayer";
let gtagName = "gtag";
let gtagCoreFunction;
let wrappedGtagFunction;
let globalInitDone = false;
function warnOnBrowserContextMismatch() {
  const mismatchedEnvMessages = [];
  if (isBrowserExtension()) {
    mismatchedEnvMessages.push("This is a browser extension environment.");
  }
  if (!areCookiesEnabled()) {
    mismatchedEnvMessages.push("Cookies are not available.");
  }
  if (mismatchedEnvMessages.length > 0) {
    const details = mismatchedEnvMessages.map((message, index) => `(${index + 1}) ${message}`).join(" ");
    const err = ERROR_FACTORY$1.create("invalid-analytics-context", {
      errorInfo: details
    });
    logger.warn(err.message);
  }
}
function factory(app, installations, options2) {
  warnOnBrowserContextMismatch();
  const appId = app.options.appId;
  if (!appId) {
    throw ERROR_FACTORY$1.create(
      "no-app-id"
      /* AnalyticsError.NO_APP_ID */
    );
  }
  if (!app.options.apiKey) {
    if (app.options.measurementId) {
      logger.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${app.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
    } else {
      throw ERROR_FACTORY$1.create(
        "no-api-key"
        /* AnalyticsError.NO_API_KEY */
      );
    }
  }
  if (initializationPromisesMap[appId] != null) {
    throw ERROR_FACTORY$1.create("already-exists", {
      id: appId
    });
  }
  if (!globalInitDone) {
    getOrCreateDataLayer(dataLayerName);
    const { wrappedGtag, gtagCore } = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName);
    wrappedGtagFunction = wrappedGtag;
    gtagCoreFunction = gtagCore;
    globalInitDone = true;
  }
  initializationPromisesMap[appId] = _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName, options2);
  const analyticsInstance = new AnalyticsService(app);
  return analyticsInstance;
}
function getAnalytics(app = getApp()) {
  app = getModularInstance(app);
  const analyticsProvider = _getProvider(app, ANALYTICS_TYPE);
  if (analyticsProvider.isInitialized()) {
    return analyticsProvider.getImmediate();
  }
  return initializeAnalytics(app);
}
function initializeAnalytics(app, options2 = {}) {
  const analyticsProvider = _getProvider(app, ANALYTICS_TYPE);
  if (analyticsProvider.isInitialized()) {
    const existingInstance = analyticsProvider.getImmediate();
    if (deepEqual(options2, analyticsProvider.getOptions())) {
      return existingInstance;
    } else {
      throw ERROR_FACTORY$1.create(
        "already-initialized"
        /* AnalyticsError.ALREADY_INITIALIZED */
      );
    }
  }
  const analyticsInstance = analyticsProvider.initialize({ options: options2 });
  return analyticsInstance;
}
function logEvent(analyticsInstance, eventName, eventParams, options2) {
  analyticsInstance = getModularInstance(analyticsInstance);
  logEvent$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], eventName, eventParams, options2).catch((e) => logger.error(e));
}
const name$1 = "@firebase/analytics";
const version$1 = "0.9.4";
function registerAnalytics() {
  _registerComponent(new Component(
    ANALYTICS_TYPE,
    (container, { options: analyticsOptions }) => {
      const app = container.getProvider("app").getImmediate();
      const installations = container.getProvider("installations-internal").getImmediate();
      return factory(app, installations, analyticsOptions);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ));
  _registerComponent(new Component(
    "analytics-internal",
    internalFactory2,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
  registerVersion(name$1, version$1);
  registerVersion(name$1, version$1, "esm2017");
  function internalFactory2(container) {
    try {
      const analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
      return {
        logEvent: (eventName, eventParams, options2) => logEvent(analytics, eventName, eventParams, options2)
      };
    } catch (e) {
      throw ERROR_FACTORY$1.create("interop-component-reg-failed", {
        reason: e
      });
    }
  }
}
registerAnalytics();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_SW_PATH = "/firebase-messaging-sw.js";
const DEFAULT_SW_SCOPE = "/firebase-cloud-messaging-push-scope";
const DEFAULT_VAPID_KEY = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";
const ENDPOINT = "https://fcmregistrations.googleapis.com/v1";
const CONSOLE_CAMPAIGN_ID = "google.c.a.c_id";
const CONSOLE_CAMPAIGN_NAME = "google.c.a.c_l";
const CONSOLE_CAMPAIGN_TIME = "google.c.a.ts";
const CONSOLE_CAMPAIGN_ANALYTICS_ENABLED = "google.c.a.e";
var MessageType$1;
(function(MessageType2) {
  MessageType2[MessageType2["DATA_MESSAGE"] = 1] = "DATA_MESSAGE";
  MessageType2[MessageType2["DISPLAY_NOTIFICATION"] = 3] = "DISPLAY_NOTIFICATION";
})(MessageType$1 || (MessageType$1 = {}));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
var MessageType;
(function(MessageType2) {
  MessageType2["PUSH_RECEIVED"] = "push-received";
  MessageType2["NOTIFICATION_CLICKED"] = "notification-clicked";
})(MessageType || (MessageType = {}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function arrayToBase64(array) {
  const uint8Array = new Uint8Array(array);
  const base64String = btoa(String.fromCharCode(...uint8Array));
  return base64String.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function base64ToArray(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base642 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
  const rawData = atob(base642);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const OLD_DB_NAME = "fcm_token_details_db";
const OLD_DB_VERSION = 5;
const OLD_OBJECT_STORE_NAME = "fcm_token_object_Store";
async function migrateOldDatabase(senderId) {
  if ("databases" in indexedDB) {
    const databases = await indexedDB.databases();
    const dbNames = databases.map((db2) => db2.name);
    if (!dbNames.includes(OLD_DB_NAME)) {
      return null;
    }
  }
  let tokenDetails = null;
  const db = await openDB(OLD_DB_NAME, OLD_DB_VERSION, {
    upgrade: async (db2, oldVersion, newVersion, upgradeTransaction) => {
      var _a;
      if (oldVersion < 2) {
        return;
      }
      if (!db2.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
        return;
      }
      const objectStore = upgradeTransaction.objectStore(OLD_OBJECT_STORE_NAME);
      const value = await objectStore.index("fcmSenderId").get(senderId);
      await objectStore.clear();
      if (!value) {
        return;
      }
      if (oldVersion === 2) {
        const oldDetails = value;
        if (!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint) {
          return;
        }
        tokenDetails = {
          token: oldDetails.fcmToken,
          createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
          subscriptionOptions: {
            auth: oldDetails.auth,
            p256dh: oldDetails.p256dh,
            endpoint: oldDetails.endpoint,
            swScope: oldDetails.swScope,
            vapidKey: typeof oldDetails.vapidKey === "string" ? oldDetails.vapidKey : arrayToBase64(oldDetails.vapidKey)
          }
        };
      } else if (oldVersion === 3) {
        const oldDetails = value;
        tokenDetails = {
          token: oldDetails.fcmToken,
          createTime: oldDetails.createTime,
          subscriptionOptions: {
            auth: arrayToBase64(oldDetails.auth),
            p256dh: arrayToBase64(oldDetails.p256dh),
            endpoint: oldDetails.endpoint,
            swScope: oldDetails.swScope,
            vapidKey: arrayToBase64(oldDetails.vapidKey)
          }
        };
      } else if (oldVersion === 4) {
        const oldDetails = value;
        tokenDetails = {
          token: oldDetails.fcmToken,
          createTime: oldDetails.createTime,
          subscriptionOptions: {
            auth: arrayToBase64(oldDetails.auth),
            p256dh: arrayToBase64(oldDetails.p256dh),
            endpoint: oldDetails.endpoint,
            swScope: oldDetails.swScope,
            vapidKey: arrayToBase64(oldDetails.vapidKey)
          }
        };
      }
    }
  });
  db.close();
  await deleteDB(OLD_DB_NAME);
  await deleteDB("fcm_vapid_details_db");
  await deleteDB("undefined");
  return checkTokenDetails(tokenDetails) ? tokenDetails : null;
}
function checkTokenDetails(tokenDetails) {
  if (!tokenDetails || !tokenDetails.subscriptionOptions) {
    return false;
  }
  const { subscriptionOptions } = tokenDetails;
  return typeof tokenDetails.createTime === "number" && tokenDetails.createTime > 0 && typeof tokenDetails.token === "string" && tokenDetails.token.length > 0 && typeof subscriptionOptions.auth === "string" && subscriptionOptions.auth.length > 0 && typeof subscriptionOptions.p256dh === "string" && subscriptionOptions.p256dh.length > 0 && typeof subscriptionOptions.endpoint === "string" && subscriptionOptions.endpoint.length > 0 && typeof subscriptionOptions.swScope === "string" && subscriptionOptions.swScope.length > 0 && typeof subscriptionOptions.vapidKey === "string" && subscriptionOptions.vapidKey.length > 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DATABASE_NAME = "firebase-messaging-database";
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = "firebase-messaging-store";
let dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
      upgrade: (upgradeDb, oldVersion) => {
        switch (oldVersion) {
          case 0:
            upgradeDb.createObjectStore(OBJECT_STORE_NAME);
        }
      }
    });
  }
  return dbPromise;
}
async function dbGet(firebaseDependencies) {
  const key = getKey(firebaseDependencies);
  const db = await getDbPromise();
  const tokenDetails = await db.transaction(OBJECT_STORE_NAME).objectStore(OBJECT_STORE_NAME).get(key);
  if (tokenDetails) {
    return tokenDetails;
  } else {
    const oldTokenDetails = await migrateOldDatabase(firebaseDependencies.appConfig.senderId);
    if (oldTokenDetails) {
      await dbSet(firebaseDependencies, oldTokenDetails);
      return oldTokenDetails;
    }
  }
}
async function dbSet(firebaseDependencies, tokenDetails) {
  const key = getKey(firebaseDependencies);
  const db = await getDbPromise();
  const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
  await tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key);
  await tx.done;
  return tokenDetails;
}
async function dbRemove(firebaseDependencies) {
  const key = getKey(firebaseDependencies);
  const db = await getDbPromise();
  const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
  await tx.objectStore(OBJECT_STORE_NAME).delete(key);
  await tx.done;
}
function getKey({ appConfig }) {
  return appConfig.appId;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_MAP = {
  [
    "missing-app-config-values"
    /* ErrorCode.MISSING_APP_CONFIG_VALUES */
  ]: 'Missing App configuration value: "{$valueName}"',
  [
    "only-available-in-window"
    /* ErrorCode.AVAILABLE_IN_WINDOW */
  ]: "This method is available in a Window context.",
  [
    "only-available-in-sw"
    /* ErrorCode.AVAILABLE_IN_SW */
  ]: "This method is available in a service worker context.",
  [
    "permission-default"
    /* ErrorCode.PERMISSION_DEFAULT */
  ]: "The notification permission was not granted and dismissed instead.",
  [
    "permission-blocked"
    /* ErrorCode.PERMISSION_BLOCKED */
  ]: "The notification permission was not granted and blocked instead.",
  [
    "unsupported-browser"
    /* ErrorCode.UNSUPPORTED_BROWSER */
  ]: "This browser doesn't support the API's required to use the Firebase SDK.",
  [
    "indexed-db-unsupported"
    /* ErrorCode.INDEXED_DB_UNSUPPORTED */
  ]: "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
  [
    "failed-service-worker-registration"
    /* ErrorCode.FAILED_DEFAULT_REGISTRATION */
  ]: "We are unable to register the default service worker. {$browserErrorMessage}",
  [
    "token-subscribe-failed"
    /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */
  ]: "A problem occurred while subscribing the user to FCM: {$errorInfo}",
  [
    "token-subscribe-no-token"
    /* ErrorCode.TOKEN_SUBSCRIBE_NO_TOKEN */
  ]: "FCM returned no token when subscribing the user to push.",
  [
    "token-unsubscribe-failed"
    /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */
  ]: "A problem occurred while unsubscribing the user from FCM: {$errorInfo}",
  [
    "token-update-failed"
    /* ErrorCode.TOKEN_UPDATE_FAILED */
  ]: "A problem occurred while updating the user from FCM: {$errorInfo}",
  [
    "token-update-no-token"
    /* ErrorCode.TOKEN_UPDATE_NO_TOKEN */
  ]: "FCM returned no token when updating the user to push.",
  [
    "use-sw-after-get-token"
    /* ErrorCode.USE_SW_AFTER_GET_TOKEN */
  ]: "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
  [
    "invalid-sw-registration"
    /* ErrorCode.INVALID_SW_REGISTRATION */
  ]: "The input to useServiceWorker() must be a ServiceWorkerRegistration.",
  [
    "invalid-bg-handler"
    /* ErrorCode.INVALID_BG_HANDLER */
  ]: "The input to setBackgroundMessageHandler() must be a function.",
  [
    "invalid-vapid-key"
    /* ErrorCode.INVALID_VAPID_KEY */
  ]: "The public VAPID key must be a string.",
  [
    "use-vapid-key-after-get-token"
    /* ErrorCode.USE_VAPID_KEY_AFTER_GET_TOKEN */
  ]: "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."
};
const ERROR_FACTORY = new ErrorFactory("messaging", "Messaging", ERROR_MAP);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function requestGetToken(firebaseDependencies, subscriptionOptions) {
  const headers = await getHeaders(firebaseDependencies);
  const body = getBody(subscriptionOptions);
  const subscribeOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  };
  let responseData;
  try {
    const response = await fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions);
    responseData = await response.json();
  } catch (err) {
    throw ERROR_FACTORY.create("token-subscribe-failed", {
      errorInfo: err === null || err === void 0 ? void 0 : err.toString()
    });
  }
  if (responseData.error) {
    const message = responseData.error.message;
    throw ERROR_FACTORY.create("token-subscribe-failed", {
      errorInfo: message
    });
  }
  if (!responseData.token) {
    throw ERROR_FACTORY.create(
      "token-subscribe-no-token"
      /* ErrorCode.TOKEN_SUBSCRIBE_NO_TOKEN */
    );
  }
  return responseData.token;
}
async function requestUpdateToken(firebaseDependencies, tokenDetails) {
  const headers = await getHeaders(firebaseDependencies);
  const body = getBody(tokenDetails.subscriptionOptions);
  const updateOptions = {
    method: "PATCH",
    headers,
    body: JSON.stringify(body)
  };
  let responseData;
  try {
    const response = await fetch(`${getEndpoint(firebaseDependencies.appConfig)}/${tokenDetails.token}`, updateOptions);
    responseData = await response.json();
  } catch (err) {
    throw ERROR_FACTORY.create("token-update-failed", {
      errorInfo: err === null || err === void 0 ? void 0 : err.toString()
    });
  }
  if (responseData.error) {
    const message = responseData.error.message;
    throw ERROR_FACTORY.create("token-update-failed", {
      errorInfo: message
    });
  }
  if (!responseData.token) {
    throw ERROR_FACTORY.create(
      "token-update-no-token"
      /* ErrorCode.TOKEN_UPDATE_NO_TOKEN */
    );
  }
  return responseData.token;
}
async function requestDeleteToken(firebaseDependencies, token) {
  const headers = await getHeaders(firebaseDependencies);
  const unsubscribeOptions = {
    method: "DELETE",
    headers
  };
  try {
    const response = await fetch(`${getEndpoint(firebaseDependencies.appConfig)}/${token}`, unsubscribeOptions);
    const responseData = await response.json();
    if (responseData.error) {
      const message = responseData.error.message;
      throw ERROR_FACTORY.create("token-unsubscribe-failed", {
        errorInfo: message
      });
    }
  } catch (err) {
    throw ERROR_FACTORY.create("token-unsubscribe-failed", {
      errorInfo: err === null || err === void 0 ? void 0 : err.toString()
    });
  }
}
function getEndpoint({ projectId }) {
  return `${ENDPOINT}/projects/${projectId}/registrations`;
}
async function getHeaders({ appConfig, installations }) {
  const authToken = await installations.getToken();
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": appConfig.apiKey,
    "x-goog-firebase-installations-auth": `FIS ${authToken}`
  });
}
function getBody({ p256dh, auth, endpoint, vapidKey: vapidKey2 }) {
  const body = {
    web: {
      endpoint,
      auth,
      p256dh
    }
  };
  if (vapidKey2 !== DEFAULT_VAPID_KEY) {
    body.web.applicationPubKey = vapidKey2;
  }
  return body;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1e3;
async function getTokenInternal(messaging) {
  const pushSubscription = await getPushSubscription(messaging.swRegistration, messaging.vapidKey);
  const subscriptionOptions = {
    vapidKey: messaging.vapidKey,
    swScope: messaging.swRegistration.scope,
    endpoint: pushSubscription.endpoint,
    auth: arrayToBase64(pushSubscription.getKey("auth")),
    p256dh: arrayToBase64(pushSubscription.getKey("p256dh"))
  };
  const tokenDetails = await dbGet(messaging.firebaseDependencies);
  if (!tokenDetails) {
    return getNewToken(messaging.firebaseDependencies, subscriptionOptions);
  } else if (!isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) {
    try {
      await requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token);
    } catch (e) {
      console.warn(e);
    }
    return getNewToken(messaging.firebaseDependencies, subscriptionOptions);
  } else if (Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS) {
    return updateToken(messaging, {
      token: tokenDetails.token,
      createTime: Date.now(),
      subscriptionOptions
    });
  } else {
    return tokenDetails.token;
  }
}
async function deleteTokenInternal(messaging) {
  const tokenDetails = await dbGet(messaging.firebaseDependencies);
  if (tokenDetails) {
    await requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token);
    await dbRemove(messaging.firebaseDependencies);
  }
  const pushSubscription = await messaging.swRegistration.pushManager.getSubscription();
  if (pushSubscription) {
    return pushSubscription.unsubscribe();
  }
  return true;
}
async function updateToken(messaging, tokenDetails) {
  try {
    const updatedToken = await requestUpdateToken(messaging.firebaseDependencies, tokenDetails);
    const updatedTokenDetails = Object.assign(Object.assign({}, tokenDetails), { token: updatedToken, createTime: Date.now() });
    await dbSet(messaging.firebaseDependencies, updatedTokenDetails);
    return updatedToken;
  } catch (e) {
    await deleteTokenInternal(messaging);
    throw e;
  }
}
async function getNewToken(firebaseDependencies, subscriptionOptions) {
  const token = await requestGetToken(firebaseDependencies, subscriptionOptions);
  const tokenDetails = {
    token,
    createTime: Date.now(),
    subscriptionOptions
  };
  await dbSet(firebaseDependencies, tokenDetails);
  return tokenDetails.token;
}
async function getPushSubscription(swRegistration, vapidKey2) {
  const subscription = await swRegistration.pushManager.getSubscription();
  if (subscription) {
    return subscription;
  }
  return swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
    // submitted to pushManager#subscribe must be of type Uint8Array.
    applicationServerKey: base64ToArray(vapidKey2)
  });
}
function isTokenValid(dbOptions, currentOptions) {
  const isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
  const isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
  const isAuthEqual = currentOptions.auth === dbOptions.auth;
  const isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
  return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function externalizePayload(internalPayload) {
  const payload = {
    from: internalPayload.from,
    // eslint-disable-next-line camelcase
    collapseKey: internalPayload.collapse_key,
    // eslint-disable-next-line camelcase
    messageId: internalPayload.fcmMessageId
  };
  propagateNotificationPayload(payload, internalPayload);
  propagateDataPayload(payload, internalPayload);
  propagateFcmOptions(payload, internalPayload);
  return payload;
}
function propagateNotificationPayload(payload, messagePayloadInternal) {
  if (!messagePayloadInternal.notification) {
    return;
  }
  payload.notification = {};
  const title = messagePayloadInternal.notification.title;
  if (!!title) {
    payload.notification.title = title;
  }
  const body = messagePayloadInternal.notification.body;
  if (!!body) {
    payload.notification.body = body;
  }
  const image = messagePayloadInternal.notification.image;
  if (!!image) {
    payload.notification.image = image;
  }
  const icon = messagePayloadInternal.notification.icon;
  if (!!icon) {
    payload.notification.icon = icon;
  }
}
function propagateDataPayload(payload, messagePayloadInternal) {
  if (!messagePayloadInternal.data) {
    return;
  }
  payload.data = messagePayloadInternal.data;
}
function propagateFcmOptions(payload, messagePayloadInternal) {
  var _a, _b, _c, _d, _e;
  if (!messagePayloadInternal.fcmOptions && !((_a = messagePayloadInternal.notification) === null || _a === void 0 ? void 0 : _a.click_action)) {
    return;
  }
  payload.fcmOptions = {};
  const link = (_c = (_b = messagePayloadInternal.fcmOptions) === null || _b === void 0 ? void 0 : _b.link) !== null && _c !== void 0 ? _c : (_d = messagePayloadInternal.notification) === null || _d === void 0 ? void 0 : _d.click_action;
  if (!!link) {
    payload.fcmOptions.link = link;
  }
  const analyticsLabel = (_e = messagePayloadInternal.fcmOptions) === null || _e === void 0 ? void 0 : _e.analytics_label;
  if (!!analyticsLabel) {
    payload.fcmOptions.analyticsLabel = analyticsLabel;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isConsoleMessage(data) {
  return typeof data === "object" && !!data && CONSOLE_CAMPAIGN_ID in data;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_mergeStrings("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o");
_mergeStrings("AzSCbw63g1R0nCw85jG8", "Iaya3yLKwmgvh7cF0q4");
function _mergeStrings(s1, s2) {
  const resultArray = [];
  for (let i = 0; i < s1.length; i++) {
    resultArray.push(s1.charAt(i));
    if (i < s2.length) {
      resultArray.push(s2.charAt(i));
    }
  }
  return resultArray.join("");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
  if (!app || !app.options) {
    throw getMissingValueError("App Configuration Object");
  }
  if (!app.name) {
    throw getMissingValueError("App Name");
  }
  const configKeys = [
    "projectId",
    "apiKey",
    "appId",
    "messagingSenderId"
  ];
  const { options: options2 } = app;
  for (const keyName of configKeys) {
    if (!options2[keyName]) {
      throw getMissingValueError(keyName);
    }
  }
  return {
    appName: app.name,
    projectId: options2.projectId,
    apiKey: options2.apiKey,
    appId: options2.appId,
    senderId: options2.messagingSenderId
  };
}
function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values", {
    valueName
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MessagingService {
  constructor(app, installations, analyticsProvider) {
    this.deliveryMetricsExportedToBigQueryEnabled = false;
    this.onBackgroundMessageHandler = null;
    this.onMessageHandler = null;
    this.logEvents = [];
    this.isLogServiceStarted = false;
    const appConfig = extractAppConfig(app);
    this.firebaseDependencies = {
      app,
      appConfig,
      installations,
      analyticsProvider
    };
  }
  _delete() {
    return Promise.resolve();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function registerDefaultSw(messaging) {
  try {
    messaging.swRegistration = await navigator.serviceWorker.register(DEFAULT_SW_PATH, {
      scope: DEFAULT_SW_SCOPE
    });
    messaging.swRegistration.update().catch(() => {
    });
  } catch (e) {
    throw ERROR_FACTORY.create("failed-service-worker-registration", {
      browserErrorMessage: e === null || e === void 0 ? void 0 : e.message
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function updateSwReg(messaging, swRegistration) {
  if (!swRegistration && !messaging.swRegistration) {
    await registerDefaultSw(messaging);
  }
  if (!swRegistration && !!messaging.swRegistration) {
    return;
  }
  if (!(swRegistration instanceof ServiceWorkerRegistration)) {
    throw ERROR_FACTORY.create(
      "invalid-sw-registration"
      /* ErrorCode.INVALID_SW_REGISTRATION */
    );
  }
  messaging.swRegistration = swRegistration;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function updateVapidKey(messaging, vapidKey2) {
  if (!!vapidKey2) {
    messaging.vapidKey = vapidKey2;
  } else if (!messaging.vapidKey) {
    messaging.vapidKey = DEFAULT_VAPID_KEY;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function getToken$1(messaging, options2) {
  if (!navigator) {
    throw ERROR_FACTORY.create(
      "only-available-in-window"
      /* ErrorCode.AVAILABLE_IN_WINDOW */
    );
  }
  if (Notification.permission === "default") {
    await Notification.requestPermission();
  }
  if (Notification.permission !== "granted") {
    throw ERROR_FACTORY.create(
      "permission-blocked"
      /* ErrorCode.PERMISSION_BLOCKED */
    );
  }
  await updateVapidKey(messaging, options2 === null || options2 === void 0 ? void 0 : options2.vapidKey);
  await updateSwReg(messaging, options2 === null || options2 === void 0 ? void 0 : options2.serviceWorkerRegistration);
  return getTokenInternal(messaging);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function logToScion(messaging, messageType, data) {
  const eventType = getEventType(messageType);
  const analytics = await messaging.firebaseDependencies.analyticsProvider.get();
  analytics.logEvent(eventType, {
    /* eslint-disable camelcase */
    message_id: data[CONSOLE_CAMPAIGN_ID],
    message_name: data[CONSOLE_CAMPAIGN_NAME],
    message_time: data[CONSOLE_CAMPAIGN_TIME],
    message_device_time: Math.floor(Date.now() / 1e3)
    /* eslint-enable camelcase */
  });
}
function getEventType(messageType) {
  switch (messageType) {
    case MessageType.NOTIFICATION_CLICKED:
      return "notification_open";
    case MessageType.PUSH_RECEIVED:
      return "notification_foreground";
    default:
      throw new Error();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function messageEventListener(messaging, event) {
  const internalPayload = event.data;
  if (!internalPayload.isFirebaseMessaging) {
    return;
  }
  if (messaging.onMessageHandler && internalPayload.messageType === MessageType.PUSH_RECEIVED) {
    if (typeof messaging.onMessageHandler === "function") {
      messaging.onMessageHandler(externalizePayload(internalPayload));
    } else {
      messaging.onMessageHandler.next(externalizePayload(internalPayload));
    }
  }
  const dataPayload = internalPayload.data;
  if (isConsoleMessage(dataPayload) && dataPayload[CONSOLE_CAMPAIGN_ANALYTICS_ENABLED] === "1") {
    await logToScion(messaging, internalPayload.messageType, dataPayload);
  }
}
const name = "@firebase/messaging";
const version = "0.12.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const WindowMessagingFactory = (container) => {
  const messaging = new MessagingService(container.getProvider("app").getImmediate(), container.getProvider("installations-internal").getImmediate(), container.getProvider("analytics-internal"));
  navigator.serviceWorker.addEventListener("message", (e) => messageEventListener(messaging, e));
  return messaging;
};
const WindowMessagingInternalFactory = (container) => {
  const messaging = container.getProvider("messaging").getImmediate();
  const messagingInternal = {
    getToken: (options2) => getToken$1(messaging, options2)
  };
  return messagingInternal;
};
function registerMessagingInWindow() {
  _registerComponent(new Component(
    "messaging",
    WindowMessagingFactory,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ));
  _registerComponent(new Component(
    "messaging-internal",
    WindowMessagingInternalFactory,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
  registerVersion(name, version);
  registerVersion(name, version, "esm2017");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function isWindowSupported() {
  try {
    await validateIndexedDBOpenable();
  } catch (e) {
    return false;
  }
  return typeof window !== "undefined" && isIndexedDBAvailable() && areCookiesEnabled() && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getMessagingInWindow(app = getApp()) {
  isWindowSupported().then((isSupported) => {
    if (!isSupported) {
      throw ERROR_FACTORY.create(
        "unsupported-browser"
        /* ErrorCode.UNSUPPORTED_BROWSER */
      );
    }
  }, (_) => {
    throw ERROR_FACTORY.create(
      "indexed-db-unsupported"
      /* ErrorCode.INDEXED_DB_UNSUPPORTED */
    );
  });
  return _getProvider(getModularInstance(app), "messaging").getImmediate();
}
async function getToken(messaging, options2) {
  messaging = getModularInstance(messaging);
  return getToken$1(messaging, options2);
}
registerMessagingInWindow();
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$1(obj);
}
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof$1(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}
function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}
const firebaseConfig = {
  apiKey: "AIzaSyDK6yPqneJ5TafOA_AySHcCw0wps_F8CPE",
  authDomain: "agroarca-equipamentos.firebaseapp.com",
  projectId: "agroarca-equipamentos",
  messagingSenderId: "260002359203",
  appId: "1:260002359203:web:8c19a187bf2fe28079dc16",
  measurementId: "G-DHSLGFC76R"
};
const vapidKey = "BPlE43kDpMP4nb3ltOOZZRDDxkJA-CKsdim6elA8c5amJmykNZl-_UmxsRGJGe1P3I0R50Qgwyf7Tlaf9ICUcqU";
const DIAS_PARA_RENOVAR_TOKEN = 14;
let instance;
class Push {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.messaging = getMessagingInWindow(this.app);
    this.analytics = getAnalytics(this.app);
  }
  solicitarPermissao() {
    return this.solicitarPermissaoNotificacoes().then(this.criarToken);
  }
  solicitarPermissaoNotificacoes() {
    return new Promise((resolve, reject) => {
      if (Notification.permission === "denied") {
        reject();
        return;
      }
      if (Notification.permission === "granted") {
        resolve();
        return;
      }
      localStorage.dataSolicitouPermNotificacao = /* @__PURE__ */ new Date();
      Notification.requestPermission().then(() => {
        if (Notification.permission === "granted") {
          resolve();
          return;
        }
        reject();
      });
    });
  }
  iniciarNotificacoes() {
    if (Notification.permission === "granted") {
      if (this.precisaRenovarToken()) {
        this.criarToken();
      }
    }
  }
  criarToken() {
    getToken(instance.messaging, { vapidKey }).then((token) => {
      if (token) {
        instance.salvarToken(token);
      }
    });
  }
  salvarToken(token) {
    axios$1.post("/notificacao/token", {
      token
    }).then(() => {
      localStorage.ultimaRenovacaoToken = /* @__PURE__ */ new Date();
    });
  }
  precisaRenovarToken() {
    let ultimaRenovacao = Date.parse(localStorage.ultimaRenovacaoToken);
    if (!isDate(ultimaRenovacao)) {
      return false;
    }
    return isAfter(/* @__PURE__ */ new Date(), addDays(new Date(ultimaRenovacao), DIAS_PARA_RENOVAR_TOKEN));
  }
  temPermissao() {
    return Notification.permission === "granted";
  }
  jaSolicitouPermissao() {
    let dataPerm = new Date(Date.parse(localStorage.dataSolicitouPermNotificacao));
    if (isDate(dataPerm)) {
      return isBefore(/* @__PURE__ */ new Date(), addDays(new Date(dataPerm), DIAS_PARA_RENOVAR_TOKEN));
    }
    return false;
  }
}
function getPush() {
  if (instance)
    return instance;
  instance = new Push();
  return instance;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance2, Constructor) {
  if (!(instance2 instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
var Channel = /* @__PURE__ */ function() {
  function Channel2() {
    _classCallCheck(this, Channel2);
  }
  _createClass(Channel2, [{
    key: "listenForWhisper",
    value: (
      /**
       * Listen for a whisper event on the channel instance.
       */
      function listenForWhisper(event, callback) {
        return this.listen(".client-" + event, callback);
      }
    )
    /**
     * Listen for an event on the channel instance.
     */
  }, {
    key: "notification",
    value: function notification(callback) {
      return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated", callback);
    }
    /**
     * Stop listening for a whisper event on the channel instance.
     */
  }, {
    key: "stopListeningForWhisper",
    value: function stopListeningForWhisper(event, callback) {
      return this.stopListening(".client-" + event, callback);
    }
  }]);
  return Channel2;
}();
var EventFormatter = /* @__PURE__ */ function() {
  function EventFormatter2(namespace) {
    _classCallCheck(this, EventFormatter2);
    this.setNamespace(namespace);
  }
  _createClass(EventFormatter2, [{
    key: "format",
    value: function format(event) {
      if (event.charAt(0) === "." || event.charAt(0) === "\\") {
        return event.substr(1);
      } else if (this.namespace) {
        event = this.namespace + "." + event;
      }
      return event.replace(/\./g, "\\");
    }
    /**
     * Set the event namespace.
     */
  }, {
    key: "setNamespace",
    value: function setNamespace(value) {
      this.namespace = value;
    }
  }]);
  return EventFormatter2;
}();
var PusherChannel = /* @__PURE__ */ function(_Channel) {
  _inherits(PusherChannel2, _Channel);
  var _super = _createSuper(PusherChannel2);
  function PusherChannel2(pusher2, name2, options2) {
    var _this;
    _classCallCheck(this, PusherChannel2);
    _this = _super.call(this);
    _this.name = name2;
    _this.pusher = pusher2;
    _this.options = options2;
    _this.eventFormatter = new EventFormatter(_this.options.namespace);
    _this.subscribe();
    return _this;
  }
  _createClass(PusherChannel2, [{
    key: "subscribe",
    value: function subscribe() {
      this.subscription = this.pusher.subscribe(this.name);
    }
    /**
     * Unsubscribe from a Pusher channel.
     */
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.pusher.unsubscribe(this.name);
    }
    /**
     * Listen for an event on the channel instance.
     */
  }, {
    key: "listen",
    value: function listen(event, callback) {
      this.on(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function listenToAll(callback) {
      var _this2 = this;
      this.subscription.bind_global(function(event, data) {
        if (event.startsWith("pusher:")) {
          return;
        }
        var namespace = _this2.options.namespace.replace(/\./g, "\\");
        var formattedEvent = event.startsWith(namespace) ? event.substring(namespace.length + 1) : "." + event;
        callback(formattedEvent, data);
      });
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      if (callback) {
        this.subscription.unbind(this.eventFormatter.format(event), callback);
      } else {
        this.subscription.unbind(this.eventFormatter.format(event));
      }
      return this;
    }
    /**
     * Stop listening for all events on the channel instance.
     */
  }, {
    key: "stopListeningToAll",
    value: function stopListeningToAll(callback) {
      if (callback) {
        this.subscription.unbind_global(callback);
      } else {
        this.subscription.unbind_global();
      }
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      this.on("pusher:subscription_succeeded", function() {
        callback();
      });
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription error occurs.
     */
  }, {
    key: "error",
    value: function error(callback) {
      this.on("pusher:subscription_error", function(status) {
        callback(status);
      });
      return this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function on(event, callback) {
      this.subscription.bind(event, callback);
      return this;
    }
  }]);
  return PusherChannel2;
}(Channel);
var PusherPrivateChannel = /* @__PURE__ */ function(_PusherChannel) {
  _inherits(PusherPrivateChannel2, _PusherChannel);
  var _super = _createSuper(PusherPrivateChannel2);
  function PusherPrivateChannel2() {
    _classCallCheck(this, PusherPrivateChannel2);
    return _super.apply(this, arguments);
  }
  _createClass(PusherPrivateChannel2, [{
    key: "whisper",
    value: (
      /**
       * Trigger client event on the channel.
       */
      function whisper(eventName, data) {
        this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
        return this;
      }
    )
  }]);
  return PusherPrivateChannel2;
}(PusherChannel);
var PusherEncryptedPrivateChannel = /* @__PURE__ */ function(_PusherChannel) {
  _inherits(PusherEncryptedPrivateChannel2, _PusherChannel);
  var _super = _createSuper(PusherEncryptedPrivateChannel2);
  function PusherEncryptedPrivateChannel2() {
    _classCallCheck(this, PusherEncryptedPrivateChannel2);
    return _super.apply(this, arguments);
  }
  _createClass(PusherEncryptedPrivateChannel2, [{
    key: "whisper",
    value: (
      /**
       * Trigger client event on the channel.
       */
      function whisper(eventName, data) {
        this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
        return this;
      }
    )
  }]);
  return PusherEncryptedPrivateChannel2;
}(PusherChannel);
var PusherPresenceChannel = /* @__PURE__ */ function(_PusherChannel) {
  _inherits(PusherPresenceChannel2, _PusherChannel);
  var _super = _createSuper(PusherPresenceChannel2);
  function PusherPresenceChannel2() {
    _classCallCheck(this, PusherPresenceChannel2);
    return _super.apply(this, arguments);
  }
  _createClass(PusherPresenceChannel2, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function here(callback) {
        this.on("pusher:subscription_succeeded", function(data) {
          callback(Object.keys(data.members).map(function(k) {
            return data.members[k];
          }));
        });
        return this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function joining(callback) {
      this.on("pusher:member_added", function(member) {
        callback(member.info);
      });
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function leaving(callback) {
      this.on("pusher:member_removed", function(member) {
        callback(member.info);
      });
      return this;
    }
    /**
     * Trigger client event on the channel.
     */
  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
  }]);
  return PusherPresenceChannel2;
}(PusherChannel);
var SocketIoChannel = /* @__PURE__ */ function(_Channel) {
  _inherits(SocketIoChannel2, _Channel);
  var _super = _createSuper(SocketIoChannel2);
  function SocketIoChannel2(socket, name2, options2) {
    var _this;
    _classCallCheck(this, SocketIoChannel2);
    _this = _super.call(this);
    _this.events = {};
    _this.listeners = {};
    _this.name = name2;
    _this.socket = socket;
    _this.options = options2;
    _this.eventFormatter = new EventFormatter(_this.options.namespace);
    _this.subscribe();
    return _this;
  }
  _createClass(SocketIoChannel2, [{
    key: "subscribe",
    value: function subscribe() {
      this.socket.emit("subscribe", {
        channel: this.name,
        auth: this.options.auth || {}
      });
    }
    /**
     * Unsubscribe from channel and ubind event callbacks.
     */
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.unbind();
      this.socket.emit("unsubscribe", {
        channel: this.name,
        auth: this.options.auth || {}
      });
    }
    /**
     * Listen for an event on the channel instance.
     */
  }, {
    key: "listen",
    value: function listen(event, callback) {
      this.on(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      this.unbindEvent(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      this.on("connect", function(socket) {
        callback(socket);
      });
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */
  }, {
    key: "error",
    value: function error(callback) {
      return this;
    }
    /**
     * Bind the channel's socket to an event and store the callback.
     */
  }, {
    key: "on",
    value: function on(event, callback) {
      var _this2 = this;
      this.listeners[event] = this.listeners[event] || [];
      if (!this.events[event]) {
        this.events[event] = function(channel2, data) {
          if (_this2.name === channel2 && _this2.listeners[event]) {
            _this2.listeners[event].forEach(function(cb) {
              return cb(data);
            });
          }
        };
        this.socket.on(event, this.events[event]);
      }
      this.listeners[event].push(callback);
      return this;
    }
    /**
     * Unbind the channel's socket from all stored event callbacks.
     */
  }, {
    key: "unbind",
    value: function unbind() {
      var _this3 = this;
      Object.keys(this.events).forEach(function(event) {
        _this3.unbindEvent(event);
      });
    }
    /**
     * Unbind the listeners for the given event.
     */
  }, {
    key: "unbindEvent",
    value: function unbindEvent(event, callback) {
      this.listeners[event] = this.listeners[event] || [];
      if (callback) {
        this.listeners[event] = this.listeners[event].filter(function(cb) {
          return cb !== callback;
        });
      }
      if (!callback || this.listeners[event].length === 0) {
        if (this.events[event]) {
          this.socket.removeListener(event, this.events[event]);
          delete this.events[event];
        }
        delete this.listeners[event];
      }
    }
  }]);
  return SocketIoChannel2;
}(Channel);
var SocketIoPrivateChannel = /* @__PURE__ */ function(_SocketIoChannel) {
  _inherits(SocketIoPrivateChannel2, _SocketIoChannel);
  var _super = _createSuper(SocketIoPrivateChannel2);
  function SocketIoPrivateChannel2() {
    _classCallCheck(this, SocketIoPrivateChannel2);
    return _super.apply(this, arguments);
  }
  _createClass(SocketIoPrivateChannel2, [{
    key: "whisper",
    value: (
      /**
       * Trigger client event on the channel.
       */
      function whisper(eventName, data) {
        this.socket.emit("client event", {
          channel: this.name,
          event: "client-".concat(eventName),
          data
        });
        return this;
      }
    )
  }]);
  return SocketIoPrivateChannel2;
}(SocketIoChannel);
var SocketIoPresenceChannel = /* @__PURE__ */ function(_SocketIoPrivateChann) {
  _inherits(SocketIoPresenceChannel2, _SocketIoPrivateChann);
  var _super = _createSuper(SocketIoPresenceChannel2);
  function SocketIoPresenceChannel2() {
    _classCallCheck(this, SocketIoPresenceChannel2);
    return _super.apply(this, arguments);
  }
  _createClass(SocketIoPresenceChannel2, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function here(callback) {
        this.on("presence:subscribed", function(members) {
          callback(members.map(function(m) {
            return m.user_info;
          }));
        });
        return this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function joining(callback) {
      this.on("presence:joining", function(member) {
        return callback(member.user_info);
      });
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function leaving(callback) {
      this.on("presence:leaving", function(member) {
        return callback(member.user_info);
      });
      return this;
    }
  }]);
  return SocketIoPresenceChannel2;
}(SocketIoPrivateChannel);
var NullChannel = /* @__PURE__ */ function(_Channel) {
  _inherits(NullChannel2, _Channel);
  var _super = _createSuper(NullChannel2);
  function NullChannel2() {
    _classCallCheck(this, NullChannel2);
    return _super.apply(this, arguments);
  }
  _createClass(NullChannel2, [{
    key: "subscribe",
    value: (
      /**
       * Subscribe to a channel.
       */
      function subscribe() {
      }
    )
    /**
     * Unsubscribe from a channel.
     */
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
    }
    /**
     * Listen for an event on the channel instance.
     */
  }, {
    key: "listen",
    value: function listen(event, callback) {
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function listenToAll(callback) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */
  }, {
    key: "error",
    value: function error(callback) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function on(event, callback) {
      return this;
    }
  }]);
  return NullChannel2;
}(Channel);
var NullPrivateChannel = /* @__PURE__ */ function(_NullChannel) {
  _inherits(NullPrivateChannel2, _NullChannel);
  var _super = _createSuper(NullPrivateChannel2);
  function NullPrivateChannel2() {
    _classCallCheck(this, NullPrivateChannel2);
    return _super.apply(this, arguments);
  }
  _createClass(NullPrivateChannel2, [{
    key: "whisper",
    value: (
      /**
       * Trigger client event on the channel.
       */
      function whisper(eventName, data) {
        return this;
      }
    )
  }]);
  return NullPrivateChannel2;
}(NullChannel);
var NullPresenceChannel = /* @__PURE__ */ function(_NullChannel) {
  _inherits(NullPresenceChannel2, _NullChannel);
  var _super = _createSuper(NullPresenceChannel2);
  function NullPresenceChannel2() {
    _classCallCheck(this, NullPresenceChannel2);
    return _super.apply(this, arguments);
  }
  _createClass(NullPresenceChannel2, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function here(callback) {
        return this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function joining(callback) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function leaving(callback) {
      return this;
    }
    /**
     * Trigger client event on the channel.
     */
  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      return this;
    }
  }]);
  return NullPresenceChannel2;
}(NullChannel);
var Connector = /* @__PURE__ */ function() {
  function Connector2(options2) {
    _classCallCheck(this, Connector2);
    this._defaultOptions = {
      auth: {
        headers: {}
      },
      authEndpoint: "/broadcasting/auth",
      userAuthentication: {
        endpoint: "/broadcasting/user-auth",
        headers: {}
      },
      broadcaster: "pusher",
      csrfToken: null,
      bearerToken: null,
      host: null,
      key: null,
      namespace: "App.Events"
    };
    this.setOptions(options2);
    this.connect();
  }
  _createClass(Connector2, [{
    key: "setOptions",
    value: function setOptions(options2) {
      this.options = _extends(this._defaultOptions, options2);
      var token = this.csrfToken();
      if (token) {
        this.options.auth.headers["X-CSRF-TOKEN"] = token;
        this.options.userAuthentication.headers["X-CSRF-TOKEN"] = token;
      }
      token = this.options.bearerToken;
      if (token) {
        this.options.auth.headers["Authorization"] = "Bearer " + token;
        this.options.userAuthentication.headers["Authorization"] = "Bearer " + token;
      }
      return options2;
    }
    /**
     * Extract the CSRF token from the page.
     */
  }, {
    key: "csrfToken",
    value: function csrfToken() {
      var selector;
      if (typeof window !== "undefined" && window["Laravel"] && window["Laravel"].csrfToken) {
        return window["Laravel"].csrfToken;
      } else if (this.options.csrfToken) {
        return this.options.csrfToken;
      } else if (typeof document !== "undefined" && typeof document.querySelector === "function" && (selector = document.querySelector('meta[name="csrf-token"]'))) {
        return selector.getAttribute("content");
      }
      return null;
    }
  }]);
  return Connector2;
}();
var PusherConnector = /* @__PURE__ */ function(_Connector) {
  _inherits(PusherConnector2, _Connector);
  var _super = _createSuper(PusherConnector2);
  function PusherConnector2() {
    var _this;
    _classCallCheck(this, PusherConnector2);
    _this = _super.apply(this, arguments);
    _this.channels = {};
    return _this;
  }
  _createClass(PusherConnector2, [{
    key: "connect",
    value: function connect() {
      if (typeof this.options.client !== "undefined") {
        this.pusher = this.options.client;
      } else if (this.options.Pusher) {
        this.pusher = new this.options.Pusher(this.options.key, this.options);
      } else {
        this.pusher = new Pusher(this.options.key, this.options);
      }
    }
    /**
     * Sign in the user via Pusher user authentication (https://pusher.com/docs/channels/using_channels/user-authentication/).
     */
  }, {
    key: "signin",
    value: function signin() {
      this.pusher.signin();
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function listen(name2, event, callback) {
      return this.channel(name2).listen(event, callback);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function channel2(name2) {
      if (!this.channels[name2]) {
        this.channels[name2] = new PusherChannel(this.pusher, name2, this.options);
      }
      return this.channels[name2];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function privateChannel(name2) {
      if (!this.channels["private-" + name2]) {
        this.channels["private-" + name2] = new PusherPrivateChannel(this.pusher, "private-" + name2, this.options);
      }
      return this.channels["private-" + name2];
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function encryptedPrivateChannel(name2) {
      if (!this.channels["private-encrypted-" + name2]) {
        this.channels["private-encrypted-" + name2] = new PusherEncryptedPrivateChannel(this.pusher, "private-encrypted-" + name2, this.options);
      }
      return this.channels["private-encrypted-" + name2];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function presenceChannel(name2) {
      if (!this.channels["presence-" + name2]) {
        this.channels["presence-" + name2] = new PusherPresenceChannel(this.pusher, "presence-" + name2, this.options);
      }
      return this.channels["presence-" + name2];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function leave(name2) {
      var _this2 = this;
      var channels = [name2, "private-" + name2, "private-encrypted-" + name2, "presence-" + name2];
      channels.forEach(function(name3, index) {
        _this2.leaveChannel(name3);
      });
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function leaveChannel(name2) {
      if (this.channels[name2]) {
        this.channels[name2].unsubscribe();
        delete this.channels[name2];
      }
    }
    /**
     * Get the socket ID for the connection.
     */
  }, {
    key: "socketId",
    value: function socketId() {
      return this.pusher.connection.socket_id;
    }
    /**
     * Disconnect Pusher connection.
     */
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.pusher.disconnect();
    }
  }]);
  return PusherConnector2;
}(Connector);
var SocketIoConnector = /* @__PURE__ */ function(_Connector) {
  _inherits(SocketIoConnector2, _Connector);
  var _super = _createSuper(SocketIoConnector2);
  function SocketIoConnector2() {
    var _this;
    _classCallCheck(this, SocketIoConnector2);
    _this = _super.apply(this, arguments);
    _this.channels = {};
    return _this;
  }
  _createClass(SocketIoConnector2, [{
    key: "connect",
    value: function connect() {
      var _this2 = this;
      var io2 = this.getSocketIO();
      this.socket = io2(this.options.host, this.options);
      this.socket.on("reconnect", function() {
        Object.values(_this2.channels).forEach(function(channel2) {
          channel2.subscribe();
        });
      });
      return this.socket;
    }
    /**
     * Get socket.io module from global scope or options.
     */
  }, {
    key: "getSocketIO",
    value: function getSocketIO() {
      if (typeof this.options.client !== "undefined") {
        return this.options.client;
      }
      if (typeof io !== "undefined") {
        return io;
      }
      throw new Error("Socket.io client not found. Should be globally available or passed via options.client");
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function listen(name2, event, callback) {
      return this.channel(name2).listen(event, callback);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function channel2(name2) {
      if (!this.channels[name2]) {
        this.channels[name2] = new SocketIoChannel(this.socket, name2, this.options);
      }
      return this.channels[name2];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function privateChannel(name2) {
      if (!this.channels["private-" + name2]) {
        this.channels["private-" + name2] = new SocketIoPrivateChannel(this.socket, "private-" + name2, this.options);
      }
      return this.channels["private-" + name2];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function presenceChannel(name2) {
      if (!this.channels["presence-" + name2]) {
        this.channels["presence-" + name2] = new SocketIoPresenceChannel(this.socket, "presence-" + name2, this.options);
      }
      return this.channels["presence-" + name2];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function leave(name2) {
      var _this3 = this;
      var channels = [name2, "private-" + name2, "presence-" + name2];
      channels.forEach(function(name3) {
        _this3.leaveChannel(name3);
      });
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function leaveChannel(name2) {
      if (this.channels[name2]) {
        this.channels[name2].unsubscribe();
        delete this.channels[name2];
      }
    }
    /**
     * Get the socket ID for the connection.
     */
  }, {
    key: "socketId",
    value: function socketId() {
      return this.socket.id;
    }
    /**
     * Disconnect Socketio connection.
     */
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.socket.disconnect();
    }
  }]);
  return SocketIoConnector2;
}(Connector);
var NullConnector = /* @__PURE__ */ function(_Connector) {
  _inherits(NullConnector2, _Connector);
  var _super = _createSuper(NullConnector2);
  function NullConnector2() {
    var _this;
    _classCallCheck(this, NullConnector2);
    _this = _super.apply(this, arguments);
    _this.channels = {};
    return _this;
  }
  _createClass(NullConnector2, [{
    key: "connect",
    value: function connect() {
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function listen(name2, event, callback) {
      return new NullChannel();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function channel2(name2) {
      return new NullChannel();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function privateChannel(name2) {
      return new NullPrivateChannel();
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function encryptedPrivateChannel(name2) {
      return new NullPrivateChannel();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function presenceChannel(name2) {
      return new NullPresenceChannel();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function leave(name2) {
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function leaveChannel(name2) {
    }
    /**
     * Get the socket ID for the connection.
     */
  }, {
    key: "socketId",
    value: function socketId() {
      return "fake-socket-id";
    }
    /**
     * Disconnect the connection.
     */
  }, {
    key: "disconnect",
    value: function disconnect() {
    }
  }]);
  return NullConnector2;
}(Connector);
var Echo = /* @__PURE__ */ function() {
  function Echo2(options2) {
    _classCallCheck(this, Echo2);
    this.options = options2;
    this.connect();
    if (!this.options.withoutInterceptors) {
      this.registerInterceptors();
    }
  }
  _createClass(Echo2, [{
    key: "channel",
    value: function channel2(_channel) {
      return this.connector.channel(_channel);
    }
    /**
     * Create a new connection.
     */
  }, {
    key: "connect",
    value: function connect() {
      if (this.options.broadcaster == "pusher") {
        this.connector = new PusherConnector(this.options);
      } else if (this.options.broadcaster == "socket.io") {
        this.connector = new SocketIoConnector(this.options);
      } else if (this.options.broadcaster == "null") {
        this.connector = new NullConnector(this.options);
      } else if (typeof this.options.broadcaster == "function") {
        this.connector = new this.options.broadcaster(this.options);
      }
    }
    /**
     * Disconnect from the Echo server.
     */
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.connector.disconnect();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "join",
    value: function join(channel2) {
      return this.connector.presenceChannel(channel2);
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function leave(channel2) {
      this.connector.leave(channel2);
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function leaveChannel(channel2) {
      this.connector.leaveChannel(channel2);
    }
    /**
     * Leave all channels.
     */
  }, {
    key: "leaveAllChannels",
    value: function leaveAllChannels() {
      for (var channel2 in this.connector.channels) {
        this.leaveChannel(channel2);
      }
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function listen(channel2, event, callback) {
      return this.connector.listen(channel2, event, callback);
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "private",
    value: function _private(channel2) {
      return this.connector.privateChannel(channel2);
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivate",
    value: function encryptedPrivate(channel2) {
      return this.connector.encryptedPrivateChannel(channel2);
    }
    /**
     * Get the Socket ID for the connection.
     */
  }, {
    key: "socketId",
    value: function socketId() {
      return this.connector.socketId();
    }
    /**
     * Register 3rd party request interceptiors. These are used to automatically
     * send a connections socket id to a Laravel app with a X-Socket-Id header.
     */
  }, {
    key: "registerInterceptors",
    value: function registerInterceptors() {
      if (typeof Vue === "function" && Vue.http) {
        this.registerVueRequestInterceptor();
      }
      if (typeof axios === "function") {
        this.registerAxiosRequestInterceptor();
      }
      if (typeof jQuery === "function") {
        this.registerjQueryAjaxSetup();
      }
      if ((typeof Turbo === "undefined" ? "undefined" : _typeof(Turbo)) === "object") {
        this.registerTurboRequestInterceptor();
      }
    }
    /**
     * Register a Vue HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerVueRequestInterceptor",
    value: function registerVueRequestInterceptor() {
      var _this = this;
      Vue.http.interceptors.push(function(request, next) {
        if (_this.socketId()) {
          request.headers.set("X-Socket-ID", _this.socketId());
        }
        next();
      });
    }
    /**
     * Register an Axios HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerAxiosRequestInterceptor",
    value: function registerAxiosRequestInterceptor() {
      var _this2 = this;
      axios.interceptors.request.use(function(config) {
        if (_this2.socketId()) {
          config.headers["X-Socket-Id"] = _this2.socketId();
        }
        return config;
      });
    }
    /**
     * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
     */
  }, {
    key: "registerjQueryAjaxSetup",
    value: function registerjQueryAjaxSetup() {
      var _this3 = this;
      if (typeof jQuery.ajax != "undefined") {
        jQuery.ajaxPrefilter(function(options2, originalOptions, xhr) {
          if (_this3.socketId()) {
            xhr.setRequestHeader("X-Socket-Id", _this3.socketId());
          }
        });
      }
    }
    /**
     * Register the Turbo Request interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerTurboRequestInterceptor",
    value: function registerTurboRequestInterceptor() {
      var _this4 = this;
      document.addEventListener("turbo:before-fetch-request", function(event) {
        event.detail.fetchOptions.headers["X-Socket-Id"] = _this4.socketId();
      });
    }
  }]);
  return Echo2;
}();
var pusherExports = {};
var pusher = {
  get exports() {
    return pusherExports;
  },
  set exports(v) {
    pusherExports = v;
  }
};
/*!
 * Pusher JavaScript Library v8.0.2
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory2) {
    module.exports = factory2();
  })(window, function() {
    return (
      /******/
      function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
          }
          var module2 = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
          };
          modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
          module2.l = true;
          return module2.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports2, name2, getter) {
          if (!__webpack_require__.o(exports2, name2)) {
            Object.defineProperty(exports2, name2, { enumerable: true, get: getter });
          }
        };
        __webpack_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
        __webpack_require__.t = function(value, mode) {
          if (mode & 1)
            value = __webpack_require__(value);
          if (mode & 8)
            return value;
          if (mode & 4 && typeof value === "object" && value && value.__esModule)
            return value;
          var ns = /* @__PURE__ */ Object.create(null);
          __webpack_require__.r(ns);
          Object.defineProperty(ns, "default", { enumerable: true, value });
          if (mode & 2 && typeof value != "string")
            for (var key in value)
              __webpack_require__.d(ns, key, function(key2) {
                return value[key2];
              }.bind(null, key));
          return ns;
        };
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? (
            /******/
            function getDefault() {
              return module2["default"];
            }
          ) : (
            /******/
            function getModuleExports() {
              return module2;
            }
          );
          __webpack_require__.d(getter, "a", getter);
          return getter;
        };
        __webpack_require__.o = function(object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 2);
      }([
        /* 0 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var __extends = this && this.__extends || function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          Object.defineProperty(exports2, "__esModule", { value: true });
          var INVALID_BYTE = 256;
          var Coder = (
            /** @class */
            function() {
              function Coder2(_paddingCharacter) {
                if (_paddingCharacter === void 0) {
                  _paddingCharacter = "=";
                }
                this._paddingCharacter = _paddingCharacter;
              }
              Coder2.prototype.encodedLength = function(length) {
                if (!this._paddingCharacter) {
                  return (length * 8 + 5) / 6 | 0;
                }
                return (length + 2) / 3 * 4 | 0;
              };
              Coder2.prototype.encode = function(data) {
                var out = "";
                var i = 0;
                for (; i < data.length - 2; i += 3) {
                  var c = data[i] << 16 | data[i + 1] << 8 | data[i + 2];
                  out += this._encodeByte(c >>> 3 * 6 & 63);
                  out += this._encodeByte(c >>> 2 * 6 & 63);
                  out += this._encodeByte(c >>> 1 * 6 & 63);
                  out += this._encodeByte(c >>> 0 * 6 & 63);
                }
                var left = data.length - i;
                if (left > 0) {
                  var c = data[i] << 16 | (left === 2 ? data[i + 1] << 8 : 0);
                  out += this._encodeByte(c >>> 3 * 6 & 63);
                  out += this._encodeByte(c >>> 2 * 6 & 63);
                  if (left === 2) {
                    out += this._encodeByte(c >>> 1 * 6 & 63);
                  } else {
                    out += this._paddingCharacter || "";
                  }
                  out += this._paddingCharacter || "";
                }
                return out;
              };
              Coder2.prototype.maxDecodedLength = function(length) {
                if (!this._paddingCharacter) {
                  return (length * 6 + 7) / 8 | 0;
                }
                return length / 4 * 3 | 0;
              };
              Coder2.prototype.decodedLength = function(s) {
                return this.maxDecodedLength(s.length - this._getPaddingLength(s));
              };
              Coder2.prototype.decode = function(s) {
                if (s.length === 0) {
                  return new Uint8Array(0);
                }
                var paddingLength = this._getPaddingLength(s);
                var length = s.length - paddingLength;
                var out = new Uint8Array(this.maxDecodedLength(length));
                var op = 0;
                var i = 0;
                var haveBad = 0;
                var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
                for (; i < length - 4; i += 4) {
                  v0 = this._decodeChar(s.charCodeAt(i + 0));
                  v1 = this._decodeChar(s.charCodeAt(i + 1));
                  v2 = this._decodeChar(s.charCodeAt(i + 2));
                  v3 = this._decodeChar(s.charCodeAt(i + 3));
                  out[op++] = v0 << 2 | v1 >>> 4;
                  out[op++] = v1 << 4 | v2 >>> 2;
                  out[op++] = v2 << 6 | v3;
                  haveBad |= v0 & INVALID_BYTE;
                  haveBad |= v1 & INVALID_BYTE;
                  haveBad |= v2 & INVALID_BYTE;
                  haveBad |= v3 & INVALID_BYTE;
                }
                if (i < length - 1) {
                  v0 = this._decodeChar(s.charCodeAt(i));
                  v1 = this._decodeChar(s.charCodeAt(i + 1));
                  out[op++] = v0 << 2 | v1 >>> 4;
                  haveBad |= v0 & INVALID_BYTE;
                  haveBad |= v1 & INVALID_BYTE;
                }
                if (i < length - 2) {
                  v2 = this._decodeChar(s.charCodeAt(i + 2));
                  out[op++] = v1 << 4 | v2 >>> 2;
                  haveBad |= v2 & INVALID_BYTE;
                }
                if (i < length - 3) {
                  v3 = this._decodeChar(s.charCodeAt(i + 3));
                  out[op++] = v2 << 6 | v3;
                  haveBad |= v3 & INVALID_BYTE;
                }
                if (haveBad !== 0) {
                  throw new Error("Base64Coder: incorrect characters for decoding");
                }
                return out;
              };
              Coder2.prototype._encodeByte = function(b) {
                var result = b;
                result += 65;
                result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
                result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
                result += 61 - b >>> 8 & 52 - 48 - 62 + 43;
                result += 62 - b >>> 8 & 62 - 43 - 63 + 47;
                return String.fromCharCode(result);
              };
              Coder2.prototype._decodeChar = function(c) {
                var result = INVALID_BYTE;
                result += (42 - c & c - 44) >>> 8 & -INVALID_BYTE + c - 43 + 62;
                result += (46 - c & c - 48) >>> 8 & -INVALID_BYTE + c - 47 + 63;
                result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
                result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
                result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
                return result;
              };
              Coder2.prototype._getPaddingLength = function(s) {
                var paddingLength = 0;
                if (this._paddingCharacter) {
                  for (var i = s.length - 1; i >= 0; i--) {
                    if (s[i] !== this._paddingCharacter) {
                      break;
                    }
                    paddingLength++;
                  }
                  if (s.length < 4 || paddingLength > 2) {
                    throw new Error("Base64Coder: incorrect padding");
                  }
                }
                return paddingLength;
              };
              return Coder2;
            }()
          );
          exports2.Coder = Coder;
          var stdCoder = new Coder();
          function encode2(data) {
            return stdCoder.encode(data);
          }
          exports2.encode = encode2;
          function decode(s) {
            return stdCoder.decode(s);
          }
          exports2.decode = decode;
          var URLSafeCoder = (
            /** @class */
            function(_super) {
              __extends(URLSafeCoder2, _super);
              function URLSafeCoder2() {
                return _super !== null && _super.apply(this, arguments) || this;
              }
              URLSafeCoder2.prototype._encodeByte = function(b) {
                var result = b;
                result += 65;
                result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
                result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
                result += 61 - b >>> 8 & 52 - 48 - 62 + 45;
                result += 62 - b >>> 8 & 62 - 45 - 63 + 95;
                return String.fromCharCode(result);
              };
              URLSafeCoder2.prototype._decodeChar = function(c) {
                var result = INVALID_BYTE;
                result += (44 - c & c - 46) >>> 8 & -INVALID_BYTE + c - 45 + 62;
                result += (94 - c & c - 96) >>> 8 & -INVALID_BYTE + c - 95 + 63;
                result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
                result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
                result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
                return result;
              };
              return URLSafeCoder2;
            }(Coder)
          );
          exports2.URLSafeCoder = URLSafeCoder;
          var urlSafeCoder = new URLSafeCoder();
          function encodeURLSafe(data) {
            return urlSafeCoder.encode(data);
          }
          exports2.encodeURLSafe = encodeURLSafe;
          function decodeURLSafe(s) {
            return urlSafeCoder.decode(s);
          }
          exports2.decodeURLSafe = decodeURLSafe;
          exports2.encodedLength = function(length) {
            return stdCoder.encodedLength(length);
          };
          exports2.maxDecodedLength = function(length) {
            return stdCoder.maxDecodedLength(length);
          };
          exports2.decodedLength = function(s) {
            return stdCoder.decodedLength(s);
          };
        },
        /* 1 */
        /***/
        function(module2, exports2, __webpack_require__) {
          Object.defineProperty(exports2, "__esModule", { value: true });
          var INVALID_UTF16 = "utf8: invalid string";
          var INVALID_UTF8 = "utf8: invalid source encoding";
          function encode2(s) {
            var arr = new Uint8Array(encodedLength(s));
            var pos = 0;
            for (var i = 0; i < s.length; i++) {
              var c = s.charCodeAt(i);
              if (c < 128) {
                arr[pos++] = c;
              } else if (c < 2048) {
                arr[pos++] = 192 | c >> 6;
                arr[pos++] = 128 | c & 63;
              } else if (c < 55296) {
                arr[pos++] = 224 | c >> 12;
                arr[pos++] = 128 | c >> 6 & 63;
                arr[pos++] = 128 | c & 63;
              } else {
                i++;
                c = (c & 1023) << 10;
                c |= s.charCodeAt(i) & 1023;
                c += 65536;
                arr[pos++] = 240 | c >> 18;
                arr[pos++] = 128 | c >> 12 & 63;
                arr[pos++] = 128 | c >> 6 & 63;
                arr[pos++] = 128 | c & 63;
              }
            }
            return arr;
          }
          exports2.encode = encode2;
          function encodedLength(s) {
            var result = 0;
            for (var i = 0; i < s.length; i++) {
              var c = s.charCodeAt(i);
              if (c < 128) {
                result += 1;
              } else if (c < 2048) {
                result += 2;
              } else if (c < 55296) {
                result += 3;
              } else if (c <= 57343) {
                if (i >= s.length - 1) {
                  throw new Error(INVALID_UTF16);
                }
                i++;
                result += 4;
              } else {
                throw new Error(INVALID_UTF16);
              }
            }
            return result;
          }
          exports2.encodedLength = encodedLength;
          function decode(arr) {
            var chars = [];
            for (var i = 0; i < arr.length; i++) {
              var b = arr[i];
              if (b & 128) {
                var min = void 0;
                if (b < 224) {
                  if (i >= arr.length) {
                    throw new Error(INVALID_UTF8);
                  }
                  var n1 = arr[++i];
                  if ((n1 & 192) !== 128) {
                    throw new Error(INVALID_UTF8);
                  }
                  b = (b & 31) << 6 | n1 & 63;
                  min = 128;
                } else if (b < 240) {
                  if (i >= arr.length - 1) {
                    throw new Error(INVALID_UTF8);
                  }
                  var n1 = arr[++i];
                  var n2 = arr[++i];
                  if ((n1 & 192) !== 128 || (n2 & 192) !== 128) {
                    throw new Error(INVALID_UTF8);
                  }
                  b = (b & 15) << 12 | (n1 & 63) << 6 | n2 & 63;
                  min = 2048;
                } else if (b < 248) {
                  if (i >= arr.length - 2) {
                    throw new Error(INVALID_UTF8);
                  }
                  var n1 = arr[++i];
                  var n2 = arr[++i];
                  var n3 = arr[++i];
                  if ((n1 & 192) !== 128 || (n2 & 192) !== 128 || (n3 & 192) !== 128) {
                    throw new Error(INVALID_UTF8);
                  }
                  b = (b & 15) << 18 | (n1 & 63) << 12 | (n2 & 63) << 6 | n3 & 63;
                  min = 65536;
                } else {
                  throw new Error(INVALID_UTF8);
                }
                if (b < min || b >= 55296 && b <= 57343) {
                  throw new Error(INVALID_UTF8);
                }
                if (b >= 65536) {
                  if (b > 1114111) {
                    throw new Error(INVALID_UTF8);
                  }
                  b -= 65536;
                  chars.push(String.fromCharCode(55296 | b >> 10));
                  b = 56320 | b & 1023;
                }
              }
              chars.push(String.fromCharCode(b));
            }
            return chars.join("");
          }
          exports2.decode = decode;
        },
        /* 2 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = __webpack_require__(3).default;
        },
        /* 3 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_require__.r(__webpack_exports__);
          var ScriptReceiverFactory = function() {
            function ScriptReceiverFactory2(prefix2, name2) {
              this.lastId = 0;
              this.prefix = prefix2;
              this.name = name2;
            }
            ScriptReceiverFactory2.prototype.create = function(callback) {
              this.lastId++;
              var number = this.lastId;
              var id = this.prefix + number;
              var name2 = this.name + "[" + number + "]";
              var called = false;
              var callbackWrapper = function() {
                if (!called) {
                  callback.apply(null, arguments);
                  called = true;
                }
              };
              this[number] = callbackWrapper;
              return { number, id, name: name2, callback: callbackWrapper };
            };
            ScriptReceiverFactory2.prototype.remove = function(receiver) {
              delete this[receiver.number];
            };
            return ScriptReceiverFactory2;
          }();
          var ScriptReceivers = new ScriptReceiverFactory("_pusher_script_", "Pusher.ScriptReceivers");
          var Defaults = {
            VERSION: "8.0.2",
            PROTOCOL: 7,
            wsPort: 80,
            wssPort: 443,
            wsPath: "",
            httpHost: "sockjs.pusher.com",
            httpPort: 80,
            httpsPort: 443,
            httpPath: "/pusher",
            stats_host: "stats.pusher.com",
            authEndpoint: "/pusher/auth",
            authTransport: "ajax",
            activityTimeout: 12e4,
            pongTimeout: 3e4,
            unavailableTimeout: 1e4,
            userAuthentication: {
              endpoint: "/pusher/user-auth",
              transport: "ajax"
            },
            channelAuthorization: {
              endpoint: "/pusher/auth",
              transport: "ajax"
            },
            cdn_http: "http://js.pusher.com",
            cdn_https: "https://js.pusher.com",
            dependency_suffix: ""
          };
          var defaults = Defaults;
          var dependency_loader_DependencyLoader = function() {
            function DependencyLoader(options2) {
              this.options = options2;
              this.receivers = options2.receivers || ScriptReceivers;
              this.loading = {};
            }
            DependencyLoader.prototype.load = function(name2, options2, callback) {
              var self2 = this;
              if (self2.loading[name2] && self2.loading[name2].length > 0) {
                self2.loading[name2].push(callback);
              } else {
                self2.loading[name2] = [callback];
                var request = runtime.createScriptRequest(self2.getPath(name2, options2));
                var receiver = self2.receivers.create(function(error) {
                  self2.receivers.remove(receiver);
                  if (self2.loading[name2]) {
                    var callbacks = self2.loading[name2];
                    delete self2.loading[name2];
                    var successCallback = function(wasSuccessful) {
                      if (!wasSuccessful) {
                        request.cleanup();
                      }
                    };
                    for (var i = 0; i < callbacks.length; i++) {
                      callbacks[i](error, successCallback);
                    }
                  }
                });
                request.send(receiver);
              }
            };
            DependencyLoader.prototype.getRoot = function(options2) {
              var cdn;
              var protocol = runtime.getDocument().location.protocol;
              if (options2 && options2.useTLS || protocol === "https:") {
                cdn = this.options.cdn_https;
              } else {
                cdn = this.options.cdn_http;
              }
              return cdn.replace(/\/*$/, "") + "/" + this.options.version;
            };
            DependencyLoader.prototype.getPath = function(name2, options2) {
              return this.getRoot(options2) + "/" + name2 + this.options.suffix + ".js";
            };
            return DependencyLoader;
          }();
          var dependency_loader = dependency_loader_DependencyLoader;
          var DependenciesReceivers = new ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers");
          var Dependencies = new dependency_loader({
            cdn_http: defaults.cdn_http,
            cdn_https: defaults.cdn_https,
            version: defaults.VERSION,
            suffix: defaults.dependency_suffix,
            receivers: DependenciesReceivers
          });
          var urlStore = {
            baseUrl: "https://pusher.com",
            urls: {
              authenticationEndpoint: {
                path: "/docs/channels/server_api/authenticating_users"
              },
              authorizationEndpoint: {
                path: "/docs/channels/server_api/authorizing-users/"
              },
              javascriptQuickStart: {
                path: "/docs/javascript_quick_start"
              },
              triggeringClientEvents: {
                path: "/docs/client_api_guide/client_events#trigger-events"
              },
              encryptedChannelSupport: {
                fullUrl: "https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support"
              }
            }
          };
          var buildLogSuffix = function(key) {
            var urlPrefix = "See:";
            var urlObj = urlStore.urls[key];
            if (!urlObj)
              return "";
            var url;
            if (urlObj.fullUrl) {
              url = urlObj.fullUrl;
            } else if (urlObj.path) {
              url = urlStore.baseUrl + urlObj.path;
            }
            if (!url)
              return "";
            return urlPrefix + " " + url;
          };
          var url_store = { buildLogSuffix };
          var AuthRequestType;
          (function(AuthRequestType2) {
            AuthRequestType2["UserAuthentication"] = "user-authentication";
            AuthRequestType2["ChannelAuthorization"] = "channel-authorization";
          })(AuthRequestType || (AuthRequestType = {}));
          var __extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var BadEventName = function(_super) {
            __extends(BadEventName2, _super);
            function BadEventName2(msg) {
              var _newTarget = this.constructor;
              var _this = _super.call(this, msg) || this;
              Object.setPrototypeOf(_this, _newTarget.prototype);
              return _this;
            }
            return BadEventName2;
          }(Error);
          var BadChannelName = function(_super) {
            __extends(BadChannelName2, _super);
            function BadChannelName2(msg) {
              var _newTarget = this.constructor;
              var _this = _super.call(this, msg) || this;
              Object.setPrototypeOf(_this, _newTarget.prototype);
              return _this;
            }
            return BadChannelName2;
          }(Error);
          var RequestTimedOut = function(_super) {
            __extends(RequestTimedOut2, _super);
            function RequestTimedOut2(msg) {
              var _newTarget = this.constructor;
              var _this = _super.call(this, msg) || this;
              Object.setPrototypeOf(_this, _newTarget.prototype);
              return _this;
            }
            return RequestTimedOut2;
          }(Error);
          var TransportPriorityTooLow = function(_super) {
            __extends(TransportPriorityTooLow2, _super);
            function TransportPriorityTooLow2(msg) {
              var _newTarget = this.constructor;
              var _this = _super.call(this, msg) || this;
              Object.setPrototypeOf(_this, _newTarget.prototype);
              return _this;
            }
            return TransportPriorityTooLow2;
          }(Error);
          var TransportClosed = function(_super) {
            __extends(TransportClosed2, _super);
            function TransportClosed2(msg) {
              var _newTarget = this.constructor;
              var _this = _super.call(this, msg) || this;
              Object.setPrototypeOf(_this, _newTarget.prototype);
              return _this;
            }
            return TransportClosed2;
          }(Error);
          var UnsupportedFeature = function(_super) {
            __extends(UnsupportedFeature2, _super);
            function UnsupportedFeature2(msg) {
              var _newTarget = this.constructor;
              var _this = _super.call(this, msg) || this;
              Object.setPrototypeOf(_this, _newTarget.prototype);
              return _this;
            }
            return UnsupportedFeature2;
          }(Error);
          var UnsupportedTransport = function(_super) {
            __extends(UnsupportedTransport2, _super);
            function UnsupportedTransport2(msg) {
              var _newTarget = this.constructor;
              var _this = _super.call(this, msg) || this;
              Object.setPrototypeOf(_this, _newTarget.prototype);
              return _this;
            }
            return UnsupportedTransport2;
          }(Error);
          var UnsupportedStrategy = function(_super) {
            __extends(UnsupportedStrategy2, _super);
            function UnsupportedStrategy2(msg) {
              var _newTarget = this.constructor;
              var _this = _super.call(this, msg) || this;
              Object.setPrototypeOf(_this, _newTarget.prototype);
              return _this;
            }
            return UnsupportedStrategy2;
          }(Error);
          var HTTPAuthError = function(_super) {
            __extends(HTTPAuthError2, _super);
            function HTTPAuthError2(status, msg) {
              var _newTarget = this.constructor;
              var _this = _super.call(this, msg) || this;
              _this.status = status;
              Object.setPrototypeOf(_this, _newTarget.prototype);
              return _this;
            }
            return HTTPAuthError2;
          }(Error);
          var ajax = function(context, query, authOptions, authRequestType, callback) {
            var xhr = runtime.createXHR();
            xhr.open("POST", authOptions.endpoint, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var headerName in authOptions.headers) {
              xhr.setRequestHeader(headerName, authOptions.headers[headerName]);
            }
            if (authOptions.headersProvider != null) {
              var dynamicHeaders = authOptions.headersProvider();
              for (var headerName in dynamicHeaders) {
                xhr.setRequestHeader(headerName, dynamicHeaders[headerName]);
              }
            }
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  var data = void 0;
                  var parsed = false;
                  try {
                    data = JSON.parse(xhr.responseText);
                    parsed = true;
                  } catch (e) {
                    callback(new HTTPAuthError(200, "JSON returned from " + authRequestType.toString() + " endpoint was invalid, yet status code was 200. Data was: " + xhr.responseText), null);
                  }
                  if (parsed) {
                    callback(null, data);
                  }
                } else {
                  var suffix = "";
                  switch (authRequestType) {
                    case AuthRequestType.UserAuthentication:
                      suffix = url_store.buildLogSuffix("authenticationEndpoint");
                      break;
                    case AuthRequestType.ChannelAuthorization:
                      suffix = "Clients must be authorized to join private or presence channels. " + url_store.buildLogSuffix("authorizationEndpoint");
                      break;
                  }
                  callback(new HTTPAuthError(xhr.status, "Unable to retrieve auth string from " + authRequestType.toString() + " endpoint - " + ("received status: " + xhr.status + " from " + authOptions.endpoint + ". " + suffix)), null);
                }
              }
            };
            xhr.send(query);
            return xhr;
          };
          var xhr_auth = ajax;
          function encode2(s) {
            return btoa2(utob(s));
          }
          var fromCharCode = String.fromCharCode;
          var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          var cb_utob = function(c) {
            var cc = c.charCodeAt(0);
            return cc < 128 ? c : cc < 2048 ? fromCharCode(192 | cc >>> 6) + fromCharCode(128 | cc & 63) : fromCharCode(224 | cc >>> 12 & 15) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
          };
          var utob = function(u) {
            return u.replace(/[^\x00-\x7F]/g, cb_utob);
          };
          var cb_encode = function(ccc) {
            var padlen = [0, 2, 1][ccc.length % 3];
            var ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0);
            var chars = [
              b64chars.charAt(ord >>> 18),
              b64chars.charAt(ord >>> 12 & 63),
              padlen >= 2 ? "=" : b64chars.charAt(ord >>> 6 & 63),
              padlen >= 1 ? "=" : b64chars.charAt(ord & 63)
            ];
            return chars.join("");
          };
          var btoa2 = window.btoa || function(b) {
            return b.replace(/[\s\S]{1,3}/g, cb_encode);
          };
          var Timer = function() {
            function Timer2(set2, clear, delay, callback) {
              var _this = this;
              this.clear = clear;
              this.timer = set2(function() {
                if (_this.timer) {
                  _this.timer = callback(_this.timer);
                }
              }, delay);
            }
            Timer2.prototype.isRunning = function() {
              return this.timer !== null;
            };
            Timer2.prototype.ensureAborted = function() {
              if (this.timer) {
                this.clear(this.timer);
                this.timer = null;
              }
            };
            return Timer2;
          }();
          var abstract_timer = Timer;
          var timers_extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          function timers_clearTimeout(timer) {
            window.clearTimeout(timer);
          }
          function timers_clearInterval(timer) {
            window.clearInterval(timer);
          }
          var OneOffTimer = function(_super) {
            timers_extends(OneOffTimer2, _super);
            function OneOffTimer2(delay, callback) {
              return _super.call(this, setTimeout, timers_clearTimeout, delay, function(timer) {
                callback();
                return null;
              }) || this;
            }
            return OneOffTimer2;
          }(abstract_timer);
          var PeriodicTimer = function(_super) {
            timers_extends(PeriodicTimer2, _super);
            function PeriodicTimer2(delay, callback) {
              return _super.call(this, setInterval, timers_clearInterval, delay, function(timer) {
                callback();
                return timer;
              }) || this;
            }
            return PeriodicTimer2;
          }(abstract_timer);
          var Util = {
            now: function() {
              if (Date.now) {
                return Date.now();
              } else {
                return (/* @__PURE__ */ new Date()).valueOf();
              }
            },
            defer: function(callback) {
              return new OneOffTimer(0, callback);
            },
            method: function(name2) {
              var boundArguments = Array.prototype.slice.call(arguments, 1);
              return function(object) {
                return object[name2].apply(object, boundArguments.concat(arguments));
              };
            }
          };
          var util = Util;
          function extend(target) {
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              sources[_i - 1] = arguments[_i];
            }
            for (var i = 0; i < sources.length; i++) {
              var extensions = sources[i];
              for (var property in extensions) {
                if (extensions[property] && extensions[property].constructor && extensions[property].constructor === Object) {
                  target[property] = extend(target[property] || {}, extensions[property]);
                } else {
                  target[property] = extensions[property];
                }
              }
            }
            return target;
          }
          function stringify() {
            var m = ["Pusher"];
            for (var i = 0; i < arguments.length; i++) {
              if (typeof arguments[i] === "string") {
                m.push(arguments[i]);
              } else {
                m.push(safeJSONStringify(arguments[i]));
              }
            }
            return m.join(" : ");
          }
          function arrayIndexOf(array, item) {
            var nativeIndexOf = Array.prototype.indexOf;
            if (array === null) {
              return -1;
            }
            if (nativeIndexOf && array.indexOf === nativeIndexOf) {
              return array.indexOf(item);
            }
            for (var i = 0, l = array.length; i < l; i++) {
              if (array[i] === item) {
                return i;
              }
            }
            return -1;
          }
          function objectApply(object, f) {
            for (var key in object) {
              if (Object.prototype.hasOwnProperty.call(object, key)) {
                f(object[key], key, object);
              }
            }
          }
          function keys(object) {
            var keys2 = [];
            objectApply(object, function(_, key) {
              keys2.push(key);
            });
            return keys2;
          }
          function values(object) {
            var values2 = [];
            objectApply(object, function(value) {
              values2.push(value);
            });
            return values2;
          }
          function apply(array, f, context) {
            for (var i = 0; i < array.length; i++) {
              f.call(context || window, array[i], i, array);
            }
          }
          function map(array, f) {
            var result = [];
            for (var i = 0; i < array.length; i++) {
              result.push(f(array[i], i, array, result));
            }
            return result;
          }
          function mapObject(object, f) {
            var result = {};
            objectApply(object, function(value, key) {
              result[key] = f(value);
            });
            return result;
          }
          function filter(array, test) {
            test = test || function(value) {
              return !!value;
            };
            var result = [];
            for (var i = 0; i < array.length; i++) {
              if (test(array[i], i, array, result)) {
                result.push(array[i]);
              }
            }
            return result;
          }
          function filterObject(object, test) {
            var result = {};
            objectApply(object, function(value, key) {
              if (test && test(value, key, object, result) || Boolean(value)) {
                result[key] = value;
              }
            });
            return result;
          }
          function flatten(object) {
            var result = [];
            objectApply(object, function(value, key) {
              result.push([key, value]);
            });
            return result;
          }
          function any(array, test) {
            for (var i = 0; i < array.length; i++) {
              if (test(array[i], i, array)) {
                return true;
              }
            }
            return false;
          }
          function collections_all(array, test) {
            for (var i = 0; i < array.length; i++) {
              if (!test(array[i], i, array)) {
                return false;
              }
            }
            return true;
          }
          function encodeParamsObject(data) {
            return mapObject(data, function(value) {
              if (typeof value === "object") {
                value = safeJSONStringify(value);
              }
              return encodeURIComponent(encode2(value.toString()));
            });
          }
          function buildQueryString(data) {
            var params = filterObject(data, function(value) {
              return value !== void 0;
            });
            var query = map(flatten(encodeParamsObject(params)), util.method("join", "=")).join("&");
            return query;
          }
          function decycleObject(object) {
            var objects = [], paths = [];
            return function derez(value, path) {
              var i, name2, nu;
              switch (typeof value) {
                case "object":
                  if (!value) {
                    return null;
                  }
                  for (i = 0; i < objects.length; i += 1) {
                    if (objects[i] === value) {
                      return { $ref: paths[i] };
                    }
                  }
                  objects.push(value);
                  paths.push(path);
                  if (Object.prototype.toString.apply(value) === "[object Array]") {
                    nu = [];
                    for (i = 0; i < value.length; i += 1) {
                      nu[i] = derez(value[i], path + "[" + i + "]");
                    }
                  } else {
                    nu = {};
                    for (name2 in value) {
                      if (Object.prototype.hasOwnProperty.call(value, name2)) {
                        nu[name2] = derez(value[name2], path + "[" + JSON.stringify(name2) + "]");
                      }
                    }
                  }
                  return nu;
                case "number":
                case "string":
                case "boolean":
                  return value;
              }
            }(object, "$");
          }
          function safeJSONStringify(source) {
            try {
              return JSON.stringify(source);
            } catch (e) {
              return JSON.stringify(decycleObject(source));
            }
          }
          var logger_Logger = function() {
            function Logger2() {
              this.globalLog = function(message) {
                if (window.console && window.console.log) {
                  window.console.log(message);
                }
              };
            }
            Logger2.prototype.debug = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              this.log(this.globalLog, args);
            };
            Logger2.prototype.warn = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              this.log(this.globalLogWarn, args);
            };
            Logger2.prototype.error = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              this.log(this.globalLogError, args);
            };
            Logger2.prototype.globalLogWarn = function(message) {
              if (window.console && window.console.warn) {
                window.console.warn(message);
              } else {
                this.globalLog(message);
              }
            };
            Logger2.prototype.globalLogError = function(message) {
              if (window.console && window.console.error) {
                window.console.error(message);
              } else {
                this.globalLogWarn(message);
              }
            };
            Logger2.prototype.log = function(defaultLoggingFunction) {
              var message = stringify.apply(this, arguments);
              if (core_pusher.log) {
                core_pusher.log(message);
              } else if (core_pusher.logToConsole) {
                var log = defaultLoggingFunction.bind(this);
                log(message);
              }
            };
            return Logger2;
          }();
          var logger2 = new logger_Logger();
          var jsonp = function(context, query, authOptions, authRequestType, callback) {
            if (authOptions.headers !== void 0 || authOptions.headersProvider != null) {
              logger2.warn("To send headers with the " + authRequestType.toString() + " request, you must use AJAX, rather than JSONP.");
            }
            var callbackName = context.nextAuthCallbackID.toString();
            context.nextAuthCallbackID++;
            var document2 = context.getDocument();
            var script = document2.createElement("script");
            context.auth_callbacks[callbackName] = function(data) {
              callback(null, data);
            };
            var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
            script.src = authOptions.endpoint + "?callback=" + encodeURIComponent(callback_name) + "&" + query;
            var head = document2.getElementsByTagName("head")[0] || document2.documentElement;
            head.insertBefore(script, head.firstChild);
          };
          var jsonp_auth = jsonp;
          var ScriptRequest = function() {
            function ScriptRequest2(src) {
              this.src = src;
            }
            ScriptRequest2.prototype.send = function(receiver) {
              var self2 = this;
              var errorString = "Error loading " + self2.src;
              self2.script = document.createElement("script");
              self2.script.id = receiver.id;
              self2.script.src = self2.src;
              self2.script.type = "text/javascript";
              self2.script.charset = "UTF-8";
              if (self2.script.addEventListener) {
                self2.script.onerror = function() {
                  receiver.callback(errorString);
                };
                self2.script.onload = function() {
                  receiver.callback(null);
                };
              } else {
                self2.script.onreadystatechange = function() {
                  if (self2.script.readyState === "loaded" || self2.script.readyState === "complete") {
                    receiver.callback(null);
                  }
                };
              }
              if (self2.script.async === void 0 && document.attachEvent && /opera/i.test(navigator.userAgent)) {
                self2.errorScript = document.createElement("script");
                self2.errorScript.id = receiver.id + "_error";
                self2.errorScript.text = receiver.name + "('" + errorString + "');";
                self2.script.async = self2.errorScript.async = false;
              } else {
                self2.script.async = true;
              }
              var head = document.getElementsByTagName("head")[0];
              head.insertBefore(self2.script, head.firstChild);
              if (self2.errorScript) {
                head.insertBefore(self2.errorScript, self2.script.nextSibling);
              }
            };
            ScriptRequest2.prototype.cleanup = function() {
              if (this.script) {
                this.script.onload = this.script.onerror = null;
                this.script.onreadystatechange = null;
              }
              if (this.script && this.script.parentNode) {
                this.script.parentNode.removeChild(this.script);
              }
              if (this.errorScript && this.errorScript.parentNode) {
                this.errorScript.parentNode.removeChild(this.errorScript);
              }
              this.script = null;
              this.errorScript = null;
            };
            return ScriptRequest2;
          }();
          var script_request = ScriptRequest;
          var jsonp_request_JSONPRequest = function() {
            function JSONPRequest(url, data) {
              this.url = url;
              this.data = data;
            }
            JSONPRequest.prototype.send = function(receiver) {
              if (this.request) {
                return;
              }
              var query = buildQueryString(this.data);
              var url = this.url + "/" + receiver.number + "?" + query;
              this.request = runtime.createScriptRequest(url);
              this.request.send(receiver);
            };
            JSONPRequest.prototype.cleanup = function() {
              if (this.request) {
                this.request.cleanup();
              }
            };
            return JSONPRequest;
          }();
          var jsonp_request = jsonp_request_JSONPRequest;
          var getAgent = function(sender, useTLS) {
            return function(data, callback) {
              var scheme = "http" + (useTLS ? "s" : "") + "://";
              var url = scheme + (sender.host || sender.options.host) + sender.options.path;
              var request = runtime.createJSONPRequest(url, data);
              var receiver = runtime.ScriptReceivers.create(function(error, result) {
                ScriptReceivers.remove(receiver);
                request.cleanup();
                if (result && result.host) {
                  sender.host = result.host;
                }
                if (callback) {
                  callback(error, result);
                }
              });
              request.send(receiver);
            };
          };
          var jsonp_timeline_jsonp = {
            name: "jsonp",
            getAgent
          };
          var jsonp_timeline = jsonp_timeline_jsonp;
          function getGenericURL(baseScheme, params, path) {
            var scheme = baseScheme + (params.useTLS ? "s" : "");
            var host = params.useTLS ? params.hostTLS : params.hostNonTLS;
            return scheme + "://" + host + path;
          }
          function getGenericPath(key, queryString) {
            var path = "/app/" + key;
            var query = "?protocol=" + defaults.PROTOCOL + "&client=js&version=" + defaults.VERSION + (queryString ? "&" + queryString : "");
            return path + query;
          }
          var ws = {
            getInitial: function(key, params) {
              var path = (params.httpPath || "") + getGenericPath(key, "flash=false");
              return getGenericURL("ws", params, path);
            }
          };
          var http = {
            getInitial: function(key, params) {
              var path = (params.httpPath || "/pusher") + getGenericPath(key);
              return getGenericURL("http", params, path);
            }
          };
          var sockjs = {
            getInitial: function(key, params) {
              return getGenericURL("http", params, params.httpPath || "/pusher");
            },
            getPath: function(key, params) {
              return getGenericPath(key);
            }
          };
          var callback_registry_CallbackRegistry = function() {
            function CallbackRegistry() {
              this._callbacks = {};
            }
            CallbackRegistry.prototype.get = function(name2) {
              return this._callbacks[prefix(name2)];
            };
            CallbackRegistry.prototype.add = function(name2, callback, context) {
              var prefixedEventName = prefix(name2);
              this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];
              this._callbacks[prefixedEventName].push({
                fn: callback,
                context
              });
            };
            CallbackRegistry.prototype.remove = function(name2, callback, context) {
              if (!name2 && !callback && !context) {
                this._callbacks = {};
                return;
              }
              var names = name2 ? [prefix(name2)] : keys(this._callbacks);
              if (callback || context) {
                this.removeCallback(names, callback, context);
              } else {
                this.removeAllCallbacks(names);
              }
            };
            CallbackRegistry.prototype.removeCallback = function(names, callback, context) {
              apply(names, function(name2) {
                this._callbacks[name2] = filter(this._callbacks[name2] || [], function(binding) {
                  return callback && callback !== binding.fn || context && context !== binding.context;
                });
                if (this._callbacks[name2].length === 0) {
                  delete this._callbacks[name2];
                }
              }, this);
            };
            CallbackRegistry.prototype.removeAllCallbacks = function(names) {
              apply(names, function(name2) {
                delete this._callbacks[name2];
              }, this);
            };
            return CallbackRegistry;
          }();
          var callback_registry = callback_registry_CallbackRegistry;
          function prefix(name2) {
            return "_" + name2;
          }
          var dispatcher_Dispatcher = function() {
            function Dispatcher(failThrough) {
              this.callbacks = new callback_registry();
              this.global_callbacks = [];
              this.failThrough = failThrough;
            }
            Dispatcher.prototype.bind = function(eventName, callback, context) {
              this.callbacks.add(eventName, callback, context);
              return this;
            };
            Dispatcher.prototype.bind_global = function(callback) {
              this.global_callbacks.push(callback);
              return this;
            };
            Dispatcher.prototype.unbind = function(eventName, callback, context) {
              this.callbacks.remove(eventName, callback, context);
              return this;
            };
            Dispatcher.prototype.unbind_global = function(callback) {
              if (!callback) {
                this.global_callbacks = [];
                return this;
              }
              this.global_callbacks = filter(this.global_callbacks || [], function(c) {
                return c !== callback;
              });
              return this;
            };
            Dispatcher.prototype.unbind_all = function() {
              this.unbind();
              this.unbind_global();
              return this;
            };
            Dispatcher.prototype.emit = function(eventName, data, metadata) {
              for (var i = 0; i < this.global_callbacks.length; i++) {
                this.global_callbacks[i](eventName, data);
              }
              var callbacks = this.callbacks.get(eventName);
              var args = [];
              if (metadata) {
                args.push(data, metadata);
              } else if (data) {
                args.push(data);
              }
              if (callbacks && callbacks.length > 0) {
                for (var i = 0; i < callbacks.length; i++) {
                  callbacks[i].fn.apply(callbacks[i].context || window, args);
                }
              } else if (this.failThrough) {
                this.failThrough(eventName, data);
              }
              return this;
            };
            return Dispatcher;
          }();
          var dispatcher = dispatcher_Dispatcher;
          var transport_connection_extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var transport_connection_TransportConnection = function(_super) {
            transport_connection_extends(TransportConnection, _super);
            function TransportConnection(hooks, name2, priority, key, options2) {
              var _this = _super.call(this) || this;
              _this.initialize = runtime.transportConnectionInitializer;
              _this.hooks = hooks;
              _this.name = name2;
              _this.priority = priority;
              _this.key = key;
              _this.options = options2;
              _this.state = "new";
              _this.timeline = options2.timeline;
              _this.activityTimeout = options2.activityTimeout;
              _this.id = _this.timeline.generateUniqueID();
              return _this;
            }
            TransportConnection.prototype.handlesActivityChecks = function() {
              return Boolean(this.hooks.handlesActivityChecks);
            };
            TransportConnection.prototype.supportsPing = function() {
              return Boolean(this.hooks.supportsPing);
            };
            TransportConnection.prototype.connect = function() {
              var _this = this;
              if (this.socket || this.state !== "initialized") {
                return false;
              }
              var url = this.hooks.urls.getInitial(this.key, this.options);
              try {
                this.socket = this.hooks.getSocket(url, this.options);
              } catch (e) {
                util.defer(function() {
                  _this.onError(e);
                  _this.changeState("closed");
                });
                return false;
              }
              this.bindListeners();
              logger2.debug("Connecting", { transport: this.name, url });
              this.changeState("connecting");
              return true;
            };
            TransportConnection.prototype.close = function() {
              if (this.socket) {
                this.socket.close();
                return true;
              } else {
                return false;
              }
            };
            TransportConnection.prototype.send = function(data) {
              var _this = this;
              if (this.state === "open") {
                util.defer(function() {
                  if (_this.socket) {
                    _this.socket.send(data);
                  }
                });
                return true;
              } else {
                return false;
              }
            };
            TransportConnection.prototype.ping = function() {
              if (this.state === "open" && this.supportsPing()) {
                this.socket.ping();
              }
            };
            TransportConnection.prototype.onOpen = function() {
              if (this.hooks.beforeOpen) {
                this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
              }
              this.changeState("open");
              this.socket.onopen = void 0;
            };
            TransportConnection.prototype.onError = function(error) {
              this.emit("error", { type: "WebSocketError", error });
              this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
            };
            TransportConnection.prototype.onClose = function(closeEvent) {
              if (closeEvent) {
                this.changeState("closed", {
                  code: closeEvent.code,
                  reason: closeEvent.reason,
                  wasClean: closeEvent.wasClean
                });
              } else {
                this.changeState("closed");
              }
              this.unbindListeners();
              this.socket = void 0;
            };
            TransportConnection.prototype.onMessage = function(message) {
              this.emit("message", message);
            };
            TransportConnection.prototype.onActivity = function() {
              this.emit("activity");
            };
            TransportConnection.prototype.bindListeners = function() {
              var _this = this;
              this.socket.onopen = function() {
                _this.onOpen();
              };
              this.socket.onerror = function(error) {
                _this.onError(error);
              };
              this.socket.onclose = function(closeEvent) {
                _this.onClose(closeEvent);
              };
              this.socket.onmessage = function(message) {
                _this.onMessage(message);
              };
              if (this.supportsPing()) {
                this.socket.onactivity = function() {
                  _this.onActivity();
                };
              }
            };
            TransportConnection.prototype.unbindListeners = function() {
              if (this.socket) {
                this.socket.onopen = void 0;
                this.socket.onerror = void 0;
                this.socket.onclose = void 0;
                this.socket.onmessage = void 0;
                if (this.supportsPing()) {
                  this.socket.onactivity = void 0;
                }
              }
            };
            TransportConnection.prototype.changeState = function(state2, params) {
              this.state = state2;
              this.timeline.info(this.buildTimelineMessage({
                state: state2,
                params
              }));
              this.emit(state2, params);
            };
            TransportConnection.prototype.buildTimelineMessage = function(message) {
              return extend({ cid: this.id }, message);
            };
            return TransportConnection;
          }(dispatcher);
          var transport_connection = transport_connection_TransportConnection;
          var transport_Transport = function() {
            function Transport(hooks) {
              this.hooks = hooks;
            }
            Transport.prototype.isSupported = function(environment) {
              return this.hooks.isSupported(environment);
            };
            Transport.prototype.createConnection = function(name2, priority, key, options2) {
              return new transport_connection(this.hooks, name2, priority, key, options2);
            };
            return Transport;
          }();
          var transports_transport = transport_Transport;
          var WSTransport = new transports_transport({
            urls: ws,
            handlesActivityChecks: false,
            supportsPing: false,
            isInitialized: function() {
              return Boolean(runtime.getWebSocketAPI());
            },
            isSupported: function() {
              return Boolean(runtime.getWebSocketAPI());
            },
            getSocket: function(url) {
              return runtime.createWebSocket(url);
            }
          });
          var httpConfiguration = {
            urls: http,
            handlesActivityChecks: false,
            supportsPing: true,
            isInitialized: function() {
              return true;
            }
          };
          var streamingConfiguration = extend({
            getSocket: function(url) {
              return runtime.HTTPFactory.createStreamingSocket(url);
            }
          }, httpConfiguration);
          var pollingConfiguration = extend({
            getSocket: function(url) {
              return runtime.HTTPFactory.createPollingSocket(url);
            }
          }, httpConfiguration);
          var xhrConfiguration = {
            isSupported: function() {
              return runtime.isXHRSupported();
            }
          };
          var XHRStreamingTransport = new transports_transport(extend({}, streamingConfiguration, xhrConfiguration));
          var XHRPollingTransport = new transports_transport(extend({}, pollingConfiguration, xhrConfiguration));
          var Transports = {
            ws: WSTransport,
            xhr_streaming: XHRStreamingTransport,
            xhr_polling: XHRPollingTransport
          };
          var transports = Transports;
          var SockJSTransport = new transports_transport({
            file: "sockjs",
            urls: sockjs,
            handlesActivityChecks: true,
            supportsPing: false,
            isSupported: function() {
              return true;
            },
            isInitialized: function() {
              return window.SockJS !== void 0;
            },
            getSocket: function(url, options2) {
              return new window.SockJS(url, null, {
                js_path: Dependencies.getPath("sockjs", {
                  useTLS: options2.useTLS
                }),
                ignore_null_origin: options2.ignoreNullOrigin
              });
            },
            beforeOpen: function(socket, path) {
              socket.send(JSON.stringify({
                path
              }));
            }
          });
          var xdrConfiguration = {
            isSupported: function(environment) {
              var yes = runtime.isXDRSupported(environment.useTLS);
              return yes;
            }
          };
          var XDRStreamingTransport = new transports_transport(extend({}, streamingConfiguration, xdrConfiguration));
          var XDRPollingTransport = new transports_transport(extend({}, pollingConfiguration, xdrConfiguration));
          transports.xdr_streaming = XDRStreamingTransport;
          transports.xdr_polling = XDRPollingTransport;
          transports.sockjs = SockJSTransport;
          var transports_transports = transports;
          var net_info_extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var NetInfo = function(_super) {
            net_info_extends(NetInfo2, _super);
            function NetInfo2() {
              var _this = _super.call(this) || this;
              var self2 = _this;
              if (window.addEventListener !== void 0) {
                window.addEventListener("online", function() {
                  self2.emit("online");
                }, false);
                window.addEventListener("offline", function() {
                  self2.emit("offline");
                }, false);
              }
              return _this;
            }
            NetInfo2.prototype.isOnline = function() {
              if (window.navigator.onLine === void 0) {
                return true;
              } else {
                return window.navigator.onLine;
              }
            };
            return NetInfo2;
          }(dispatcher);
          var net_info_Network = new NetInfo();
          var assistant_to_the_transport_manager_AssistantToTheTransportManager = function() {
            function AssistantToTheTransportManager(manager, transport, options2) {
              this.manager = manager;
              this.transport = transport;
              this.minPingDelay = options2.minPingDelay;
              this.maxPingDelay = options2.maxPingDelay;
              this.pingDelay = void 0;
            }
            AssistantToTheTransportManager.prototype.createConnection = function(name2, priority, key, options2) {
              var _this = this;
              options2 = extend({}, options2, {
                activityTimeout: this.pingDelay
              });
              var connection = this.transport.createConnection(name2, priority, key, options2);
              var openTimestamp = null;
              var onOpen = function() {
                connection.unbind("open", onOpen);
                connection.bind("closed", onClosed);
                openTimestamp = util.now();
              };
              var onClosed = function(closeEvent) {
                connection.unbind("closed", onClosed);
                if (closeEvent.code === 1002 || closeEvent.code === 1003) {
                  _this.manager.reportDeath();
                } else if (!closeEvent.wasClean && openTimestamp) {
                  var lifespan = util.now() - openTimestamp;
                  if (lifespan < 2 * _this.maxPingDelay) {
                    _this.manager.reportDeath();
                    _this.pingDelay = Math.max(lifespan / 2, _this.minPingDelay);
                  }
                }
              };
              connection.bind("open", onOpen);
              return connection;
            };
            AssistantToTheTransportManager.prototype.isSupported = function(environment) {
              return this.manager.isAlive() && this.transport.isSupported(environment);
            };
            return AssistantToTheTransportManager;
          }();
          var assistant_to_the_transport_manager = assistant_to_the_transport_manager_AssistantToTheTransportManager;
          var Protocol = {
            decodeMessage: function(messageEvent) {
              try {
                var messageData = JSON.parse(messageEvent.data);
                var pusherEventData = messageData.data;
                if (typeof pusherEventData === "string") {
                  try {
                    pusherEventData = JSON.parse(messageData.data);
                  } catch (e) {
                  }
                }
                var pusherEvent = {
                  event: messageData.event,
                  channel: messageData.channel,
                  data: pusherEventData
                };
                if (messageData.user_id) {
                  pusherEvent.user_id = messageData.user_id;
                }
                return pusherEvent;
              } catch (e) {
                throw { type: "MessageParseError", error: e, data: messageEvent.data };
              }
            },
            encodeMessage: function(event) {
              return JSON.stringify(event);
            },
            processHandshake: function(messageEvent) {
              var message = Protocol.decodeMessage(messageEvent);
              if (message.event === "pusher:connection_established") {
                if (!message.data.activity_timeout) {
                  throw "No activity timeout specified in handshake";
                }
                return {
                  action: "connected",
                  id: message.data.socket_id,
                  activityTimeout: message.data.activity_timeout * 1e3
                };
              } else if (message.event === "pusher:error") {
                return {
                  action: this.getCloseAction(message.data),
                  error: this.getCloseError(message.data)
                };
              } else {
                throw "Invalid handshake";
              }
            },
            getCloseAction: function(closeEvent) {
              if (closeEvent.code < 4e3) {
                if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
                  return "backoff";
                } else {
                  return null;
                }
              } else if (closeEvent.code === 4e3) {
                return "tls_only";
              } else if (closeEvent.code < 4100) {
                return "refused";
              } else if (closeEvent.code < 4200) {
                return "backoff";
              } else if (closeEvent.code < 4300) {
                return "retry";
              } else {
                return "refused";
              }
            },
            getCloseError: function(closeEvent) {
              if (closeEvent.code !== 1e3 && closeEvent.code !== 1001) {
                return {
                  type: "PusherError",
                  data: {
                    code: closeEvent.code,
                    message: closeEvent.reason || closeEvent.message
                  }
                };
              } else {
                return null;
              }
            }
          };
          var protocol_protocol = Protocol;
          var connection_extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var connection_Connection = function(_super) {
            connection_extends(Connection, _super);
            function Connection(id, transport) {
              var _this = _super.call(this) || this;
              _this.id = id;
              _this.transport = transport;
              _this.activityTimeout = transport.activityTimeout;
              _this.bindListeners();
              return _this;
            }
            Connection.prototype.handlesActivityChecks = function() {
              return this.transport.handlesActivityChecks();
            };
            Connection.prototype.send = function(data) {
              return this.transport.send(data);
            };
            Connection.prototype.send_event = function(name2, data, channel2) {
              var event = { event: name2, data };
              if (channel2) {
                event.channel = channel2;
              }
              logger2.debug("Event sent", event);
              return this.send(protocol_protocol.encodeMessage(event));
            };
            Connection.prototype.ping = function() {
              if (this.transport.supportsPing()) {
                this.transport.ping();
              } else {
                this.send_event("pusher:ping", {});
              }
            };
            Connection.prototype.close = function() {
              this.transport.close();
            };
            Connection.prototype.bindListeners = function() {
              var _this = this;
              var listeners = {
                message: function(messageEvent) {
                  var pusherEvent;
                  try {
                    pusherEvent = protocol_protocol.decodeMessage(messageEvent);
                  } catch (e) {
                    _this.emit("error", {
                      type: "MessageParseError",
                      error: e,
                      data: messageEvent.data
                    });
                  }
                  if (pusherEvent !== void 0) {
                    logger2.debug("Event recd", pusherEvent);
                    switch (pusherEvent.event) {
                      case "pusher:error":
                        _this.emit("error", {
                          type: "PusherError",
                          data: pusherEvent.data
                        });
                        break;
                      case "pusher:ping":
                        _this.emit("ping");
                        break;
                      case "pusher:pong":
                        _this.emit("pong");
                        break;
                    }
                    _this.emit("message", pusherEvent);
                  }
                },
                activity: function() {
                  _this.emit("activity");
                },
                error: function(error) {
                  _this.emit("error", error);
                },
                closed: function(closeEvent) {
                  unbindListeners();
                  if (closeEvent && closeEvent.code) {
                    _this.handleCloseEvent(closeEvent);
                  }
                  _this.transport = null;
                  _this.emit("closed");
                }
              };
              var unbindListeners = function() {
                objectApply(listeners, function(listener, event) {
                  _this.transport.unbind(event, listener);
                });
              };
              objectApply(listeners, function(listener, event) {
                _this.transport.bind(event, listener);
              });
            };
            Connection.prototype.handleCloseEvent = function(closeEvent) {
              var action = protocol_protocol.getCloseAction(closeEvent);
              var error = protocol_protocol.getCloseError(closeEvent);
              if (error) {
                this.emit("error", error);
              }
              if (action) {
                this.emit(action, { action, error });
              }
            };
            return Connection;
          }(dispatcher);
          var connection_connection = connection_Connection;
          var handshake_Handshake = function() {
            function Handshake(transport, callback) {
              this.transport = transport;
              this.callback = callback;
              this.bindListeners();
            }
            Handshake.prototype.close = function() {
              this.unbindListeners();
              this.transport.close();
            };
            Handshake.prototype.bindListeners = function() {
              var _this = this;
              this.onMessage = function(m) {
                _this.unbindListeners();
                var result;
                try {
                  result = protocol_protocol.processHandshake(m);
                } catch (e) {
                  _this.finish("error", { error: e });
                  _this.transport.close();
                  return;
                }
                if (result.action === "connected") {
                  _this.finish("connected", {
                    connection: new connection_connection(result.id, _this.transport),
                    activityTimeout: result.activityTimeout
                  });
                } else {
                  _this.finish(result.action, { error: result.error });
                  _this.transport.close();
                }
              };
              this.onClosed = function(closeEvent) {
                _this.unbindListeners();
                var action = protocol_protocol.getCloseAction(closeEvent) || "backoff";
                var error = protocol_protocol.getCloseError(closeEvent);
                _this.finish(action, { error });
              };
              this.transport.bind("message", this.onMessage);
              this.transport.bind("closed", this.onClosed);
            };
            Handshake.prototype.unbindListeners = function() {
              this.transport.unbind("message", this.onMessage);
              this.transport.unbind("closed", this.onClosed);
            };
            Handshake.prototype.finish = function(action, params) {
              this.callback(extend({ transport: this.transport, action }, params));
            };
            return Handshake;
          }();
          var connection_handshake = handshake_Handshake;
          var timeline_sender_TimelineSender = function() {
            function TimelineSender(timeline, options2) {
              this.timeline = timeline;
              this.options = options2 || {};
            }
            TimelineSender.prototype.send = function(useTLS, callback) {
              if (this.timeline.isEmpty()) {
                return;
              }
              this.timeline.send(runtime.TimelineTransport.getAgent(this, useTLS), callback);
            };
            return TimelineSender;
          }();
          var timeline_sender = timeline_sender_TimelineSender;
          var channel_extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var channel_Channel = function(_super) {
            channel_extends(Channel2, _super);
            function Channel2(name2, pusher2) {
              var _this = _super.call(this, function(event, data) {
                logger2.debug("No callbacks on " + name2 + " for " + event);
              }) || this;
              _this.name = name2;
              _this.pusher = pusher2;
              _this.subscribed = false;
              _this.subscriptionPending = false;
              _this.subscriptionCancelled = false;
              return _this;
            }
            Channel2.prototype.authorize = function(socketId, callback) {
              return callback(null, { auth: "" });
            };
            Channel2.prototype.trigger = function(event, data) {
              if (event.indexOf("client-") !== 0) {
                throw new BadEventName("Event '" + event + "' does not start with 'client-'");
              }
              if (!this.subscribed) {
                var suffix = url_store.buildLogSuffix("triggeringClientEvents");
                logger2.warn("Client event triggered before channel 'subscription_succeeded' event . " + suffix);
              }
              return this.pusher.send_event(event, data, this.name);
            };
            Channel2.prototype.disconnect = function() {
              this.subscribed = false;
              this.subscriptionPending = false;
            };
            Channel2.prototype.handleEvent = function(event) {
              var eventName = event.event;
              var data = event.data;
              if (eventName === "pusher_internal:subscription_succeeded") {
                this.handleSubscriptionSucceededEvent(event);
              } else if (eventName === "pusher_internal:subscription_count") {
                this.handleSubscriptionCountEvent(event);
              } else if (eventName.indexOf("pusher_internal:") !== 0) {
                var metadata = {};
                this.emit(eventName, data, metadata);
              }
            };
            Channel2.prototype.handleSubscriptionSucceededEvent = function(event) {
              this.subscriptionPending = false;
              this.subscribed = true;
              if (this.subscriptionCancelled) {
                this.pusher.unsubscribe(this.name);
              } else {
                this.emit("pusher:subscription_succeeded", event.data);
              }
            };
            Channel2.prototype.handleSubscriptionCountEvent = function(event) {
              if (event.data.subscription_count) {
                this.subscriptionCount = event.data.subscription_count;
              }
              this.emit("pusher:subscription_count", event.data);
            };
            Channel2.prototype.subscribe = function() {
              var _this = this;
              if (this.subscribed) {
                return;
              }
              this.subscriptionPending = true;
              this.subscriptionCancelled = false;
              this.authorize(this.pusher.connection.socket_id, function(error, data) {
                if (error) {
                  _this.subscriptionPending = false;
                  logger2.error(error.toString());
                  _this.emit("pusher:subscription_error", Object.assign({}, {
                    type: "AuthError",
                    error: error.message
                  }, error instanceof HTTPAuthError ? { status: error.status } : {}));
                } else {
                  _this.pusher.send_event("pusher:subscribe", {
                    auth: data.auth,
                    channel_data: data.channel_data,
                    channel: _this.name
                  });
                }
              });
            };
            Channel2.prototype.unsubscribe = function() {
              this.subscribed = false;
              this.pusher.send_event("pusher:unsubscribe", {
                channel: this.name
              });
            };
            Channel2.prototype.cancelSubscription = function() {
              this.subscriptionCancelled = true;
            };
            Channel2.prototype.reinstateSubscription = function() {
              this.subscriptionCancelled = false;
            };
            return Channel2;
          }(dispatcher);
          var channels_channel = channel_Channel;
          var private_channel_extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var PrivateChannel = function(_super) {
            private_channel_extends(PrivateChannel2, _super);
            function PrivateChannel2() {
              return _super !== null && _super.apply(this, arguments) || this;
            }
            PrivateChannel2.prototype.authorize = function(socketId, callback) {
              return this.pusher.config.channelAuthorizer({
                channelName: this.name,
                socketId
              }, callback);
            };
            return PrivateChannel2;
          }(channels_channel);
          var private_channel = PrivateChannel;
          var members_Members = function() {
            function Members() {
              this.reset();
            }
            Members.prototype.get = function(id) {
              if (Object.prototype.hasOwnProperty.call(this.members, id)) {
                return {
                  id,
                  info: this.members[id]
                };
              } else {
                return null;
              }
            };
            Members.prototype.each = function(callback) {
              var _this = this;
              objectApply(this.members, function(member, id) {
                callback(_this.get(id));
              });
            };
            Members.prototype.setMyID = function(id) {
              this.myID = id;
            };
            Members.prototype.onSubscription = function(subscriptionData) {
              this.members = subscriptionData.presence.hash;
              this.count = subscriptionData.presence.count;
              this.me = this.get(this.myID);
            };
            Members.prototype.addMember = function(memberData) {
              if (this.get(memberData.user_id) === null) {
                this.count++;
              }
              this.members[memberData.user_id] = memberData.user_info;
              return this.get(memberData.user_id);
            };
            Members.prototype.removeMember = function(memberData) {
              var member = this.get(memberData.user_id);
              if (member) {
                delete this.members[memberData.user_id];
                this.count--;
              }
              return member;
            };
            Members.prototype.reset = function() {
              this.members = {};
              this.count = 0;
              this.myID = null;
              this.me = null;
            };
            return Members;
          }();
          var members = members_Members;
          var presence_channel_extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var __awaiter = function(thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P ? value : new P(function(resolve) {
                resolve(value);
              });
            }
            return new (P || (P = Promise))(function(resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator["throw"](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
              }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          };
          var __generator = function(thisArg, body) {
            var _ = { label: 0, sent: function() {
              if (t[0] & 1)
                throw t[1];
              return t[1];
            }, trys: [], ops: [] }, f, y, t, g;
            return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
              return this;
            }), g;
            function verb(n) {
              return function(v) {
                return step([n, v]);
              };
            }
            function step(op) {
              if (f)
                throw new TypeError("Generator is already executing.");
              while (_)
                try {
                  if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                  if (y = 0, t)
                    op = [op[0] & 2, t.value];
                  switch (op[0]) {
                    case 0:
                    case 1:
                      t = op;
                      break;
                    case 4:
                      _.label++;
                      return { value: op[1], done: false };
                    case 5:
                      _.label++;
                      y = op[1];
                      op = [0];
                      continue;
                    case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                    default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                      }
                      if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                      }
                      if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                      }
                      if (t[2])
                        _.ops.pop();
                      _.trys.pop();
                      continue;
                  }
                  op = body.call(thisArg, _);
                } catch (e) {
                  op = [6, e];
                  y = 0;
                } finally {
                  f = t = 0;
                }
              if (op[0] & 5)
                throw op[1];
              return { value: op[0] ? op[1] : void 0, done: true };
            }
          };
          var presence_channel_PresenceChannel = function(_super) {
            presence_channel_extends(PresenceChannel, _super);
            function PresenceChannel(name2, pusher2) {
              var _this = _super.call(this, name2, pusher2) || this;
              _this.members = new members();
              return _this;
            }
            PresenceChannel.prototype.authorize = function(socketId, callback) {
              var _this = this;
              _super.prototype.authorize.call(this, socketId, function(error, authData) {
                return __awaiter(_this, void 0, void 0, function() {
                  var channelData, suffix;
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        if (!!error)
                          return [3, 3];
                        authData = authData;
                        if (!(authData.channel_data != null))
                          return [3, 1];
                        channelData = JSON.parse(authData.channel_data);
                        this.members.setMyID(channelData.user_id);
                        return [3, 3];
                      case 1:
                        return [4, this.pusher.user.signinDonePromise];
                      case 2:
                        _a.sent();
                        if (this.pusher.user.user_data != null) {
                          this.members.setMyID(this.pusher.user.user_data.id);
                        } else {
                          suffix = url_store.buildLogSuffix("authorizationEndpoint");
                          logger2.error("Invalid auth response for channel '" + this.name + "', " + ("expected 'channel_data' field. " + suffix + ", ") + "or the user should be signed in.");
                          callback("Invalid auth response");
                          return [2];
                        }
                        _a.label = 3;
                      case 3:
                        callback(error, authData);
                        return [2];
                    }
                  });
                });
              });
            };
            PresenceChannel.prototype.handleEvent = function(event) {
              var eventName = event.event;
              if (eventName.indexOf("pusher_internal:") === 0) {
                this.handleInternalEvent(event);
              } else {
                var data = event.data;
                var metadata = {};
                if (event.user_id) {
                  metadata.user_id = event.user_id;
                }
                this.emit(eventName, data, metadata);
              }
            };
            PresenceChannel.prototype.handleInternalEvent = function(event) {
              var eventName = event.event;
              var data = event.data;
              switch (eventName) {
                case "pusher_internal:subscription_succeeded":
                  this.handleSubscriptionSucceededEvent(event);
                  break;
                case "pusher_internal:subscription_count":
                  this.handleSubscriptionCountEvent(event);
                  break;
                case "pusher_internal:member_added":
                  var addedMember = this.members.addMember(data);
                  this.emit("pusher:member_added", addedMember);
                  break;
                case "pusher_internal:member_removed":
                  var removedMember = this.members.removeMember(data);
                  if (removedMember) {
                    this.emit("pusher:member_removed", removedMember);
                  }
                  break;
              }
            };
            PresenceChannel.prototype.handleSubscriptionSucceededEvent = function(event) {
              this.subscriptionPending = false;
              this.subscribed = true;
              if (this.subscriptionCancelled) {
                this.pusher.unsubscribe(this.name);
              } else {
                this.members.onSubscription(event.data);
                this.emit("pusher:subscription_succeeded", this.members);
              }
            };
            PresenceChannel.prototype.disconnect = function() {
              this.members.reset();
              _super.prototype.disconnect.call(this);
            };
            return PresenceChannel;
          }(private_channel);
          var presence_channel = presence_channel_PresenceChannel;
          var utf8 = __webpack_require__(1);
          var base642 = __webpack_require__(0);
          var encrypted_channel_extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var encrypted_channel_EncryptedChannel = function(_super) {
            encrypted_channel_extends(EncryptedChannel, _super);
            function EncryptedChannel(name2, pusher2, nacl) {
              var _this = _super.call(this, name2, pusher2) || this;
              _this.key = null;
              _this.nacl = nacl;
              return _this;
            }
            EncryptedChannel.prototype.authorize = function(socketId, callback) {
              var _this = this;
              _super.prototype.authorize.call(this, socketId, function(error, authData) {
                if (error) {
                  callback(error, authData);
                  return;
                }
                var sharedSecret = authData["shared_secret"];
                if (!sharedSecret) {
                  callback(new Error("No shared_secret key in auth payload for encrypted channel: " + _this.name), null);
                  return;
                }
                _this.key = Object(base642["decode"])(sharedSecret);
                delete authData["shared_secret"];
                callback(null, authData);
              });
            };
            EncryptedChannel.prototype.trigger = function(event, data) {
              throw new UnsupportedFeature("Client events are not currently supported for encrypted channels");
            };
            EncryptedChannel.prototype.handleEvent = function(event) {
              var eventName = event.event;
              var data = event.data;
              if (eventName.indexOf("pusher_internal:") === 0 || eventName.indexOf("pusher:") === 0) {
                _super.prototype.handleEvent.call(this, event);
                return;
              }
              this.handleEncryptedEvent(eventName, data);
            };
            EncryptedChannel.prototype.handleEncryptedEvent = function(event, data) {
              var _this = this;
              if (!this.key) {
                logger2.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                return;
              }
              if (!data.ciphertext || !data.nonce) {
                logger2.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + data);
                return;
              }
              var cipherText = Object(base642["decode"])(data.ciphertext);
              if (cipherText.length < this.nacl.secretbox.overheadLength) {
                logger2.error("Expected encrypted event ciphertext length to be " + this.nacl.secretbox.overheadLength + ", got: " + cipherText.length);
                return;
              }
              var nonce = Object(base642["decode"])(data.nonce);
              if (nonce.length < this.nacl.secretbox.nonceLength) {
                logger2.error("Expected encrypted event nonce length to be " + this.nacl.secretbox.nonceLength + ", got: " + nonce.length);
                return;
              }
              var bytes = this.nacl.secretbox.open(cipherText, nonce, this.key);
              if (bytes === null) {
                logger2.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint...");
                this.authorize(this.pusher.connection.socket_id, function(error, authData) {
                  if (error) {
                    logger2.error("Failed to make a request to the authEndpoint: " + authData + ". Unable to fetch new key, so dropping encrypted event");
                    return;
                  }
                  bytes = _this.nacl.secretbox.open(cipherText, nonce, _this.key);
                  if (bytes === null) {
                    logger2.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                  }
                  _this.emit(event, _this.getDataToEmit(bytes));
                  return;
                });
                return;
              }
              this.emit(event, this.getDataToEmit(bytes));
            };
            EncryptedChannel.prototype.getDataToEmit = function(bytes) {
              var raw = Object(utf8["decode"])(bytes);
              try {
                return JSON.parse(raw);
              } catch (_a) {
                return raw;
              }
            };
            return EncryptedChannel;
          }(private_channel);
          var encrypted_channel = encrypted_channel_EncryptedChannel;
          var connection_manager_extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var connection_manager_ConnectionManager = function(_super) {
            connection_manager_extends(ConnectionManager, _super);
            function ConnectionManager(key, options2) {
              var _this = _super.call(this) || this;
              _this.state = "initialized";
              _this.connection = null;
              _this.key = key;
              _this.options = options2;
              _this.timeline = _this.options.timeline;
              _this.usingTLS = _this.options.useTLS;
              _this.errorCallbacks = _this.buildErrorCallbacks();
              _this.connectionCallbacks = _this.buildConnectionCallbacks(_this.errorCallbacks);
              _this.handshakeCallbacks = _this.buildHandshakeCallbacks(_this.errorCallbacks);
              var Network = runtime.getNetwork();
              Network.bind("online", function() {
                _this.timeline.info({ netinfo: "online" });
                if (_this.state === "connecting" || _this.state === "unavailable") {
                  _this.retryIn(0);
                }
              });
              Network.bind("offline", function() {
                _this.timeline.info({ netinfo: "offline" });
                if (_this.connection) {
                  _this.sendActivityCheck();
                }
              });
              _this.updateStrategy();
              return _this;
            }
            ConnectionManager.prototype.connect = function() {
              if (this.connection || this.runner) {
                return;
              }
              if (!this.strategy.isSupported()) {
                this.updateState("failed");
                return;
              }
              this.updateState("connecting");
              this.startConnecting();
              this.setUnavailableTimer();
            };
            ConnectionManager.prototype.send = function(data) {
              if (this.connection) {
                return this.connection.send(data);
              } else {
                return false;
              }
            };
            ConnectionManager.prototype.send_event = function(name2, data, channel2) {
              if (this.connection) {
                return this.connection.send_event(name2, data, channel2);
              } else {
                return false;
              }
            };
            ConnectionManager.prototype.disconnect = function() {
              this.disconnectInternally();
              this.updateState("disconnected");
            };
            ConnectionManager.prototype.isUsingTLS = function() {
              return this.usingTLS;
            };
            ConnectionManager.prototype.startConnecting = function() {
              var _this = this;
              var callback = function(error, handshake) {
                if (error) {
                  _this.runner = _this.strategy.connect(0, callback);
                } else {
                  if (handshake.action === "error") {
                    _this.emit("error", {
                      type: "HandshakeError",
                      error: handshake.error
                    });
                    _this.timeline.error({ handshakeError: handshake.error });
                  } else {
                    _this.abortConnecting();
                    _this.handshakeCallbacks[handshake.action](handshake);
                  }
                }
              };
              this.runner = this.strategy.connect(0, callback);
            };
            ConnectionManager.prototype.abortConnecting = function() {
              if (this.runner) {
                this.runner.abort();
                this.runner = null;
              }
            };
            ConnectionManager.prototype.disconnectInternally = function() {
              this.abortConnecting();
              this.clearRetryTimer();
              this.clearUnavailableTimer();
              if (this.connection) {
                var connection = this.abandonConnection();
                connection.close();
              }
            };
            ConnectionManager.prototype.updateStrategy = function() {
              this.strategy = this.options.getStrategy({
                key: this.key,
                timeline: this.timeline,
                useTLS: this.usingTLS
              });
            };
            ConnectionManager.prototype.retryIn = function(delay) {
              var _this = this;
              this.timeline.info({ action: "retry", delay });
              if (delay > 0) {
                this.emit("connecting_in", Math.round(delay / 1e3));
              }
              this.retryTimer = new OneOffTimer(delay || 0, function() {
                _this.disconnectInternally();
                _this.connect();
              });
            };
            ConnectionManager.prototype.clearRetryTimer = function() {
              if (this.retryTimer) {
                this.retryTimer.ensureAborted();
                this.retryTimer = null;
              }
            };
            ConnectionManager.prototype.setUnavailableTimer = function() {
              var _this = this;
              this.unavailableTimer = new OneOffTimer(this.options.unavailableTimeout, function() {
                _this.updateState("unavailable");
              });
            };
            ConnectionManager.prototype.clearUnavailableTimer = function() {
              if (this.unavailableTimer) {
                this.unavailableTimer.ensureAborted();
              }
            };
            ConnectionManager.prototype.sendActivityCheck = function() {
              var _this = this;
              this.stopActivityCheck();
              this.connection.ping();
              this.activityTimer = new OneOffTimer(this.options.pongTimeout, function() {
                _this.timeline.error({ pong_timed_out: _this.options.pongTimeout });
                _this.retryIn(0);
              });
            };
            ConnectionManager.prototype.resetActivityCheck = function() {
              var _this = this;
              this.stopActivityCheck();
              if (this.connection && !this.connection.handlesActivityChecks()) {
                this.activityTimer = new OneOffTimer(this.activityTimeout, function() {
                  _this.sendActivityCheck();
                });
              }
            };
            ConnectionManager.prototype.stopActivityCheck = function() {
              if (this.activityTimer) {
                this.activityTimer.ensureAborted();
              }
            };
            ConnectionManager.prototype.buildConnectionCallbacks = function(errorCallbacks) {
              var _this = this;
              return extend({}, errorCallbacks, {
                message: function(message) {
                  _this.resetActivityCheck();
                  _this.emit("message", message);
                },
                ping: function() {
                  _this.send_event("pusher:pong", {});
                },
                activity: function() {
                  _this.resetActivityCheck();
                },
                error: function(error) {
                  _this.emit("error", error);
                },
                closed: function() {
                  _this.abandonConnection();
                  if (_this.shouldRetry()) {
                    _this.retryIn(1e3);
                  }
                }
              });
            };
            ConnectionManager.prototype.buildHandshakeCallbacks = function(errorCallbacks) {
              var _this = this;
              return extend({}, errorCallbacks, {
                connected: function(handshake) {
                  _this.activityTimeout = Math.min(_this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
                  _this.clearUnavailableTimer();
                  _this.setConnection(handshake.connection);
                  _this.socket_id = _this.connection.id;
                  _this.updateState("connected", { socket_id: _this.socket_id });
                }
              });
            };
            ConnectionManager.prototype.buildErrorCallbacks = function() {
              var _this = this;
              var withErrorEmitted = function(callback) {
                return function(result) {
                  if (result.error) {
                    _this.emit("error", { type: "WebSocketError", error: result.error });
                  }
                  callback(result);
                };
              };
              return {
                tls_only: withErrorEmitted(function() {
                  _this.usingTLS = true;
                  _this.updateStrategy();
                  _this.retryIn(0);
                }),
                refused: withErrorEmitted(function() {
                  _this.disconnect();
                }),
                backoff: withErrorEmitted(function() {
                  _this.retryIn(1e3);
                }),
                retry: withErrorEmitted(function() {
                  _this.retryIn(0);
                })
              };
            };
            ConnectionManager.prototype.setConnection = function(connection) {
              this.connection = connection;
              for (var event in this.connectionCallbacks) {
                this.connection.bind(event, this.connectionCallbacks[event]);
              }
              this.resetActivityCheck();
            };
            ConnectionManager.prototype.abandonConnection = function() {
              if (!this.connection) {
                return;
              }
              this.stopActivityCheck();
              for (var event in this.connectionCallbacks) {
                this.connection.unbind(event, this.connectionCallbacks[event]);
              }
              var connection = this.connection;
              this.connection = null;
              return connection;
            };
            ConnectionManager.prototype.updateState = function(newState, data) {
              var previousState = this.state;
              this.state = newState;
              if (previousState !== newState) {
                var newStateDescription = newState;
                if (newStateDescription === "connected") {
                  newStateDescription += " with new socket ID " + data.socket_id;
                }
                logger2.debug("State changed", previousState + " -> " + newStateDescription);
                this.timeline.info({ state: newState, params: data });
                this.emit("state_change", { previous: previousState, current: newState });
                this.emit(newState, data);
              }
            };
            ConnectionManager.prototype.shouldRetry = function() {
              return this.state === "connecting" || this.state === "connected";
            };
            return ConnectionManager;
          }(dispatcher);
          var connection_manager = connection_manager_ConnectionManager;
          var channels_Channels = function() {
            function Channels() {
              this.channels = {};
            }
            Channels.prototype.add = function(name2, pusher2) {
              if (!this.channels[name2]) {
                this.channels[name2] = createChannel(name2, pusher2);
              }
              return this.channels[name2];
            };
            Channels.prototype.all = function() {
              return values(this.channels);
            };
            Channels.prototype.find = function(name2) {
              return this.channels[name2];
            };
            Channels.prototype.remove = function(name2) {
              var channel2 = this.channels[name2];
              delete this.channels[name2];
              return channel2;
            };
            Channels.prototype.disconnect = function() {
              objectApply(this.channels, function(channel2) {
                channel2.disconnect();
              });
            };
            return Channels;
          }();
          var channels = channels_Channels;
          function createChannel(name2, pusher2) {
            if (name2.indexOf("private-encrypted-") === 0) {
              if (pusher2.config.nacl) {
                return factory2.createEncryptedChannel(name2, pusher2, pusher2.config.nacl);
              }
              var errMsg = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available";
              var suffix = url_store.buildLogSuffix("encryptedChannelSupport");
              throw new UnsupportedFeature(errMsg + ". " + suffix);
            } else if (name2.indexOf("private-") === 0) {
              return factory2.createPrivateChannel(name2, pusher2);
            } else if (name2.indexOf("presence-") === 0) {
              return factory2.createPresenceChannel(name2, pusher2);
            } else if (name2.indexOf("#") === 0) {
              throw new BadChannelName('Cannot create a channel with name "' + name2 + '".');
            } else {
              return factory2.createChannel(name2, pusher2);
            }
          }
          var Factory = {
            createChannels: function() {
              return new channels();
            },
            createConnectionManager: function(key, options2) {
              return new connection_manager(key, options2);
            },
            createChannel: function(name2, pusher2) {
              return new channels_channel(name2, pusher2);
            },
            createPrivateChannel: function(name2, pusher2) {
              return new private_channel(name2, pusher2);
            },
            createPresenceChannel: function(name2, pusher2) {
              return new presence_channel(name2, pusher2);
            },
            createEncryptedChannel: function(name2, pusher2, nacl) {
              return new encrypted_channel(name2, pusher2, nacl);
            },
            createTimelineSender: function(timeline, options2) {
              return new timeline_sender(timeline, options2);
            },
            createHandshake: function(transport, callback) {
              return new connection_handshake(transport, callback);
            },
            createAssistantToTheTransportManager: function(manager, transport, options2) {
              return new assistant_to_the_transport_manager(manager, transport, options2);
            }
          };
          var factory2 = Factory;
          var transport_manager_TransportManager = function() {
            function TransportManager(options2) {
              this.options = options2 || {};
              this.livesLeft = this.options.lives || Infinity;
            }
            TransportManager.prototype.getAssistant = function(transport) {
              return factory2.createAssistantToTheTransportManager(this, transport, {
                minPingDelay: this.options.minPingDelay,
                maxPingDelay: this.options.maxPingDelay
              });
            };
            TransportManager.prototype.isAlive = function() {
              return this.livesLeft > 0;
            };
            TransportManager.prototype.reportDeath = function() {
              this.livesLeft -= 1;
            };
            return TransportManager;
          }();
          var transport_manager = transport_manager_TransportManager;
          var sequential_strategy_SequentialStrategy = function() {
            function SequentialStrategy(strategies, options2) {
              this.strategies = strategies;
              this.loop = Boolean(options2.loop);
              this.failFast = Boolean(options2.failFast);
              this.timeout = options2.timeout;
              this.timeoutLimit = options2.timeoutLimit;
            }
            SequentialStrategy.prototype.isSupported = function() {
              return any(this.strategies, util.method("isSupported"));
            };
            SequentialStrategy.prototype.connect = function(minPriority, callback) {
              var _this = this;
              var strategies = this.strategies;
              var current = 0;
              var timeout = this.timeout;
              var runner = null;
              var tryNextStrategy = function(error, handshake) {
                if (handshake) {
                  callback(null, handshake);
                } else {
                  current = current + 1;
                  if (_this.loop) {
                    current = current % strategies.length;
                  }
                  if (current < strategies.length) {
                    if (timeout) {
                      timeout = timeout * 2;
                      if (_this.timeoutLimit) {
                        timeout = Math.min(timeout, _this.timeoutLimit);
                      }
                    }
                    runner = _this.tryStrategy(strategies[current], minPriority, { timeout, failFast: _this.failFast }, tryNextStrategy);
                  } else {
                    callback(true);
                  }
                }
              };
              runner = this.tryStrategy(strategies[current], minPriority, { timeout, failFast: this.failFast }, tryNextStrategy);
              return {
                abort: function() {
                  runner.abort();
                },
                forceMinPriority: function(p) {
                  minPriority = p;
                  if (runner) {
                    runner.forceMinPriority(p);
                  }
                }
              };
            };
            SequentialStrategy.prototype.tryStrategy = function(strategy, minPriority, options2, callback) {
              var timer = null;
              var runner = null;
              if (options2.timeout > 0) {
                timer = new OneOffTimer(options2.timeout, function() {
                  runner.abort();
                  callback(true);
                });
              }
              runner = strategy.connect(minPriority, function(error, handshake) {
                if (error && timer && timer.isRunning() && !options2.failFast) {
                  return;
                }
                if (timer) {
                  timer.ensureAborted();
                }
                callback(error, handshake);
              });
              return {
                abort: function() {
                  if (timer) {
                    timer.ensureAborted();
                  }
                  runner.abort();
                },
                forceMinPriority: function(p) {
                  runner.forceMinPriority(p);
                }
              };
            };
            return SequentialStrategy;
          }();
          var sequential_strategy = sequential_strategy_SequentialStrategy;
          var best_connected_ever_strategy_BestConnectedEverStrategy = function() {
            function BestConnectedEverStrategy(strategies) {
              this.strategies = strategies;
            }
            BestConnectedEverStrategy.prototype.isSupported = function() {
              return any(this.strategies, util.method("isSupported"));
            };
            BestConnectedEverStrategy.prototype.connect = function(minPriority, callback) {
              return connect(this.strategies, minPriority, function(i, runners) {
                return function(error, handshake) {
                  runners[i].error = error;
                  if (error) {
                    if (allRunnersFailed(runners)) {
                      callback(true);
                    }
                    return;
                  }
                  apply(runners, function(runner) {
                    runner.forceMinPriority(handshake.transport.priority);
                  });
                  callback(null, handshake);
                };
              });
            };
            return BestConnectedEverStrategy;
          }();
          var best_connected_ever_strategy = best_connected_ever_strategy_BestConnectedEverStrategy;
          function connect(strategies, minPriority, callbackBuilder) {
            var runners = map(strategies, function(strategy, i, _, rs) {
              return strategy.connect(minPriority, callbackBuilder(i, rs));
            });
            return {
              abort: function() {
                apply(runners, abortRunner);
              },
              forceMinPriority: function(p) {
                apply(runners, function(runner) {
                  runner.forceMinPriority(p);
                });
              }
            };
          }
          function allRunnersFailed(runners) {
            return collections_all(runners, function(runner) {
              return Boolean(runner.error);
            });
          }
          function abortRunner(runner) {
            if (!runner.error && !runner.aborted) {
              runner.abort();
              runner.aborted = true;
            }
          }
          var cached_strategy_CachedStrategy = function() {
            function CachedStrategy(strategy, transports2, options2) {
              this.strategy = strategy;
              this.transports = transports2;
              this.ttl = options2.ttl || 1800 * 1e3;
              this.usingTLS = options2.useTLS;
              this.timeline = options2.timeline;
            }
            CachedStrategy.prototype.isSupported = function() {
              return this.strategy.isSupported();
            };
            CachedStrategy.prototype.connect = function(minPriority, callback) {
              var usingTLS = this.usingTLS;
              var info = fetchTransportCache(usingTLS);
              var strategies = [this.strategy];
              if (info && info.timestamp + this.ttl >= util.now()) {
                var transport = this.transports[info.transport];
                if (transport) {
                  this.timeline.info({
                    cached: true,
                    transport: info.transport,
                    latency: info.latency
                  });
                  strategies.push(new sequential_strategy([transport], {
                    timeout: info.latency * 2 + 1e3,
                    failFast: true
                  }));
                }
              }
              var startTimestamp = util.now();
              var runner = strategies.pop().connect(minPriority, function cb(error, handshake) {
                if (error) {
                  flushTransportCache(usingTLS);
                  if (strategies.length > 0) {
                    startTimestamp = util.now();
                    runner = strategies.pop().connect(minPriority, cb);
                  } else {
                    callback(error);
                  }
                } else {
                  storeTransportCache(usingTLS, handshake.transport.name, util.now() - startTimestamp);
                  callback(null, handshake);
                }
              });
              return {
                abort: function() {
                  runner.abort();
                },
                forceMinPriority: function(p) {
                  minPriority = p;
                  if (runner) {
                    runner.forceMinPriority(p);
                  }
                }
              };
            };
            return CachedStrategy;
          }();
          var cached_strategy = cached_strategy_CachedStrategy;
          function getTransportCacheKey(usingTLS) {
            return "pusherTransport" + (usingTLS ? "TLS" : "NonTLS");
          }
          function fetchTransportCache(usingTLS) {
            var storage = runtime.getLocalStorage();
            if (storage) {
              try {
                var serializedCache = storage[getTransportCacheKey(usingTLS)];
                if (serializedCache) {
                  return JSON.parse(serializedCache);
                }
              } catch (e) {
                flushTransportCache(usingTLS);
              }
            }
            return null;
          }
          function storeTransportCache(usingTLS, transport, latency) {
            var storage = runtime.getLocalStorage();
            if (storage) {
              try {
                storage[getTransportCacheKey(usingTLS)] = safeJSONStringify({
                  timestamp: util.now(),
                  transport,
                  latency
                });
              } catch (e) {
              }
            }
          }
          function flushTransportCache(usingTLS) {
            var storage = runtime.getLocalStorage();
            if (storage) {
              try {
                delete storage[getTransportCacheKey(usingTLS)];
              } catch (e) {
              }
            }
          }
          var delayed_strategy_DelayedStrategy = function() {
            function DelayedStrategy(strategy, _a) {
              var number = _a.delay;
              this.strategy = strategy;
              this.options = { delay: number };
            }
            DelayedStrategy.prototype.isSupported = function() {
              return this.strategy.isSupported();
            };
            DelayedStrategy.prototype.connect = function(minPriority, callback) {
              var strategy = this.strategy;
              var runner;
              var timer = new OneOffTimer(this.options.delay, function() {
                runner = strategy.connect(minPriority, callback);
              });
              return {
                abort: function() {
                  timer.ensureAborted();
                  if (runner) {
                    runner.abort();
                  }
                },
                forceMinPriority: function(p) {
                  minPriority = p;
                  if (runner) {
                    runner.forceMinPriority(p);
                  }
                }
              };
            };
            return DelayedStrategy;
          }();
          var delayed_strategy = delayed_strategy_DelayedStrategy;
          var IfStrategy = function() {
            function IfStrategy2(test, trueBranch, falseBranch) {
              this.test = test;
              this.trueBranch = trueBranch;
              this.falseBranch = falseBranch;
            }
            IfStrategy2.prototype.isSupported = function() {
              var branch = this.test() ? this.trueBranch : this.falseBranch;
              return branch.isSupported();
            };
            IfStrategy2.prototype.connect = function(minPriority, callback) {
              var branch = this.test() ? this.trueBranch : this.falseBranch;
              return branch.connect(minPriority, callback);
            };
            return IfStrategy2;
          }();
          var if_strategy = IfStrategy;
          var FirstConnectedStrategy = function() {
            function FirstConnectedStrategy2(strategy) {
              this.strategy = strategy;
            }
            FirstConnectedStrategy2.prototype.isSupported = function() {
              return this.strategy.isSupported();
            };
            FirstConnectedStrategy2.prototype.connect = function(minPriority, callback) {
              var runner = this.strategy.connect(minPriority, function(error, handshake) {
                if (handshake) {
                  runner.abort();
                }
                callback(error, handshake);
              });
              return runner;
            };
            return FirstConnectedStrategy2;
          }();
          var first_connected_strategy = FirstConnectedStrategy;
          function testSupportsStrategy(strategy) {
            return function() {
              return strategy.isSupported();
            };
          }
          var getDefaultStrategy = function(config, baseOptions, defineTransport) {
            var definedTransports = {};
            function defineTransportStrategy(name2, type, priority, options2, manager) {
              var transport = defineTransport(config, name2, type, priority, options2, manager);
              definedTransports[name2] = transport;
              return transport;
            }
            var ws_options = Object.assign({}, baseOptions, {
              hostNonTLS: config.wsHost + ":" + config.wsPort,
              hostTLS: config.wsHost + ":" + config.wssPort,
              httpPath: config.wsPath
            });
            var wss_options = Object.assign({}, ws_options, {
              useTLS: true
            });
            var sockjs_options = Object.assign({}, baseOptions, {
              hostNonTLS: config.httpHost + ":" + config.httpPort,
              hostTLS: config.httpHost + ":" + config.httpsPort,
              httpPath: config.httpPath
            });
            var timeouts = {
              loop: true,
              timeout: 15e3,
              timeoutLimit: 6e4
            };
            var ws_manager = new transport_manager({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: config.activityTimeout
            });
            var streaming_manager = new transport_manager({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: config.activityTimeout
            });
            var ws_transport = defineTransportStrategy("ws", "ws", 3, ws_options, ws_manager);
            var wss_transport = defineTransportStrategy("wss", "ws", 3, wss_options, ws_manager);
            var sockjs_transport = defineTransportStrategy("sockjs", "sockjs", 1, sockjs_options);
            var xhr_streaming_transport = defineTransportStrategy("xhr_streaming", "xhr_streaming", 1, sockjs_options, streaming_manager);
            var xdr_streaming_transport = defineTransportStrategy("xdr_streaming", "xdr_streaming", 1, sockjs_options, streaming_manager);
            var xhr_polling_transport = defineTransportStrategy("xhr_polling", "xhr_polling", 1, sockjs_options);
            var xdr_polling_transport = defineTransportStrategy("xdr_polling", "xdr_polling", 1, sockjs_options);
            var ws_loop = new sequential_strategy([ws_transport], timeouts);
            var wss_loop = new sequential_strategy([wss_transport], timeouts);
            var sockjs_loop = new sequential_strategy([sockjs_transport], timeouts);
            var streaming_loop = new sequential_strategy([
              new if_strategy(testSupportsStrategy(xhr_streaming_transport), xhr_streaming_transport, xdr_streaming_transport)
            ], timeouts);
            var polling_loop = new sequential_strategy([
              new if_strategy(testSupportsStrategy(xhr_polling_transport), xhr_polling_transport, xdr_polling_transport)
            ], timeouts);
            var http_loop = new sequential_strategy([
              new if_strategy(testSupportsStrategy(streaming_loop), new best_connected_ever_strategy([
                streaming_loop,
                new delayed_strategy(polling_loop, { delay: 4e3 })
              ]), polling_loop)
            ], timeouts);
            var http_fallback_loop = new if_strategy(testSupportsStrategy(http_loop), http_loop, sockjs_loop);
            var wsStrategy;
            if (baseOptions.useTLS) {
              wsStrategy = new best_connected_ever_strategy([
                ws_loop,
                new delayed_strategy(http_fallback_loop, { delay: 2e3 })
              ]);
            } else {
              wsStrategy = new best_connected_ever_strategy([
                ws_loop,
                new delayed_strategy(wss_loop, { delay: 2e3 }),
                new delayed_strategy(http_fallback_loop, { delay: 5e3 })
              ]);
            }
            return new cached_strategy(new first_connected_strategy(new if_strategy(testSupportsStrategy(ws_transport), wsStrategy, http_fallback_loop)), definedTransports, {
              ttl: 18e5,
              timeline: baseOptions.timeline,
              useTLS: baseOptions.useTLS
            });
          };
          var default_strategy = getDefaultStrategy;
          var transport_connection_initializer = function() {
            var self2 = this;
            self2.timeline.info(self2.buildTimelineMessage({
              transport: self2.name + (self2.options.useTLS ? "s" : "")
            }));
            if (self2.hooks.isInitialized()) {
              self2.changeState("initialized");
            } else if (self2.hooks.file) {
              self2.changeState("initializing");
              Dependencies.load(self2.hooks.file, { useTLS: self2.options.useTLS }, function(error, callback) {
                if (self2.hooks.isInitialized()) {
                  self2.changeState("initialized");
                  callback(true);
                } else {
                  if (error) {
                    self2.onError(error);
                  }
                  self2.onClose();
                  callback(false);
                }
              });
            } else {
              self2.onClose();
            }
          };
          var http_xdomain_request_hooks = {
            getRequest: function(socket) {
              var xdr = new window.XDomainRequest();
              xdr.ontimeout = function() {
                socket.emit("error", new RequestTimedOut());
                socket.close();
              };
              xdr.onerror = function(e) {
                socket.emit("error", e);
                socket.close();
              };
              xdr.onprogress = function() {
                if (xdr.responseText && xdr.responseText.length > 0) {
                  socket.onChunk(200, xdr.responseText);
                }
              };
              xdr.onload = function() {
                if (xdr.responseText && xdr.responseText.length > 0) {
                  socket.onChunk(200, xdr.responseText);
                }
                socket.emit("finished", 200);
                socket.close();
              };
              return xdr;
            },
            abortRequest: function(xdr) {
              xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
              xdr.abort();
            }
          };
          var http_xdomain_request = http_xdomain_request_hooks;
          var http_request_extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var MAX_BUFFER_LENGTH = 256 * 1024;
          var http_request_HTTPRequest = function(_super) {
            http_request_extends(HTTPRequest, _super);
            function HTTPRequest(hooks, method, url) {
              var _this = _super.call(this) || this;
              _this.hooks = hooks;
              _this.method = method;
              _this.url = url;
              return _this;
            }
            HTTPRequest.prototype.start = function(payload) {
              var _this = this;
              this.position = 0;
              this.xhr = this.hooks.getRequest(this);
              this.unloader = function() {
                _this.close();
              };
              runtime.addUnloadListener(this.unloader);
              this.xhr.open(this.method, this.url, true);
              if (this.xhr.setRequestHeader) {
                this.xhr.setRequestHeader("Content-Type", "application/json");
              }
              this.xhr.send(payload);
            };
            HTTPRequest.prototype.close = function() {
              if (this.unloader) {
                runtime.removeUnloadListener(this.unloader);
                this.unloader = null;
              }
              if (this.xhr) {
                this.hooks.abortRequest(this.xhr);
                this.xhr = null;
              }
            };
            HTTPRequest.prototype.onChunk = function(status, data) {
              while (true) {
                var chunk = this.advanceBuffer(data);
                if (chunk) {
                  this.emit("chunk", { status, data: chunk });
                } else {
                  break;
                }
              }
              if (this.isBufferTooLong(data)) {
                this.emit("buffer_too_long");
              }
            };
            HTTPRequest.prototype.advanceBuffer = function(buffer) {
              var unreadData = buffer.slice(this.position);
              var endOfLinePosition = unreadData.indexOf("\n");
              if (endOfLinePosition !== -1) {
                this.position += endOfLinePosition + 1;
                return unreadData.slice(0, endOfLinePosition);
              } else {
                return null;
              }
            };
            HTTPRequest.prototype.isBufferTooLong = function(buffer) {
              return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
            };
            return HTTPRequest;
          }(dispatcher);
          var http_request = http_request_HTTPRequest;
          var State;
          (function(State2) {
            State2[State2["CONNECTING"] = 0] = "CONNECTING";
            State2[State2["OPEN"] = 1] = "OPEN";
            State2[State2["CLOSED"] = 3] = "CLOSED";
          })(State || (State = {}));
          var state = State;
          var autoIncrement = 1;
          var http_socket_HTTPSocket = function() {
            function HTTPSocket(hooks, url) {
              this.hooks = hooks;
              this.session = randomNumber(1e3) + "/" + randomString(8);
              this.location = getLocation(url);
              this.readyState = state.CONNECTING;
              this.openStream();
            }
            HTTPSocket.prototype.send = function(payload) {
              return this.sendRaw(JSON.stringify([payload]));
            };
            HTTPSocket.prototype.ping = function() {
              this.hooks.sendHeartbeat(this);
            };
            HTTPSocket.prototype.close = function(code, reason) {
              this.onClose(code, reason, true);
            };
            HTTPSocket.prototype.sendRaw = function(payload) {
              if (this.readyState === state.OPEN) {
                try {
                  runtime.createSocketRequest("POST", getUniqueURL(getSendURL(this.location, this.session))).start(payload);
                  return true;
                } catch (e) {
                  return false;
                }
              } else {
                return false;
              }
            };
            HTTPSocket.prototype.reconnect = function() {
              this.closeStream();
              this.openStream();
            };
            HTTPSocket.prototype.onClose = function(code, reason, wasClean) {
              this.closeStream();
              this.readyState = state.CLOSED;
              if (this.onclose) {
                this.onclose({
                  code,
                  reason,
                  wasClean
                });
              }
            };
            HTTPSocket.prototype.onChunk = function(chunk) {
              if (chunk.status !== 200) {
                return;
              }
              if (this.readyState === state.OPEN) {
                this.onActivity();
              }
              var payload;
              var type = chunk.data.slice(0, 1);
              switch (type) {
                case "o":
                  payload = JSON.parse(chunk.data.slice(1) || "{}");
                  this.onOpen(payload);
                  break;
                case "a":
                  payload = JSON.parse(chunk.data.slice(1) || "[]");
                  for (var i = 0; i < payload.length; i++) {
                    this.onEvent(payload[i]);
                  }
                  break;
                case "m":
                  payload = JSON.parse(chunk.data.slice(1) || "null");
                  this.onEvent(payload);
                  break;
                case "h":
                  this.hooks.onHeartbeat(this);
                  break;
                case "c":
                  payload = JSON.parse(chunk.data.slice(1) || "[]");
                  this.onClose(payload[0], payload[1], true);
                  break;
              }
            };
            HTTPSocket.prototype.onOpen = function(options2) {
              if (this.readyState === state.CONNECTING) {
                if (options2 && options2.hostname) {
                  this.location.base = replaceHost(this.location.base, options2.hostname);
                }
                this.readyState = state.OPEN;
                if (this.onopen) {
                  this.onopen();
                }
              } else {
                this.onClose(1006, "Server lost session", true);
              }
            };
            HTTPSocket.prototype.onEvent = function(event) {
              if (this.readyState === state.OPEN && this.onmessage) {
                this.onmessage({ data: event });
              }
            };
            HTTPSocket.prototype.onActivity = function() {
              if (this.onactivity) {
                this.onactivity();
              }
            };
            HTTPSocket.prototype.onError = function(error) {
              if (this.onerror) {
                this.onerror(error);
              }
            };
            HTTPSocket.prototype.openStream = function() {
              var _this = this;
              this.stream = runtime.createSocketRequest("POST", getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
              this.stream.bind("chunk", function(chunk) {
                _this.onChunk(chunk);
              });
              this.stream.bind("finished", function(status) {
                _this.hooks.onFinished(_this, status);
              });
              this.stream.bind("buffer_too_long", function() {
                _this.reconnect();
              });
              try {
                this.stream.start();
              } catch (error) {
                util.defer(function() {
                  _this.onError(error);
                  _this.onClose(1006, "Could not start streaming", false);
                });
              }
            };
            HTTPSocket.prototype.closeStream = function() {
              if (this.stream) {
                this.stream.unbind_all();
                this.stream.close();
                this.stream = null;
              }
            };
            return HTTPSocket;
          }();
          function getLocation(url) {
            var parts = /([^\?]*)\/*(\??.*)/.exec(url);
            return {
              base: parts[1],
              queryString: parts[2]
            };
          }
          function getSendURL(url, session) {
            return url.base + "/" + session + "/xhr_send";
          }
          function getUniqueURL(url) {
            var separator = url.indexOf("?") === -1 ? "?" : "&";
            return url + separator + "t=" + +/* @__PURE__ */ new Date() + "&n=" + autoIncrement++;
          }
          function replaceHost(url, hostname) {
            var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
            return urlParts[1] + hostname + urlParts[3];
          }
          function randomNumber(max) {
            return runtime.randomInt(max);
          }
          function randomString(length) {
            var result = [];
            for (var i = 0; i < length; i++) {
              result.push(randomNumber(32).toString(32));
            }
            return result.join("");
          }
          var http_socket = http_socket_HTTPSocket;
          var http_streaming_socket_hooks = {
            getReceiveURL: function(url, session) {
              return url.base + "/" + session + "/xhr_streaming" + url.queryString;
            },
            onHeartbeat: function(socket) {
              socket.sendRaw("[]");
            },
            sendHeartbeat: function(socket) {
              socket.sendRaw("[]");
            },
            onFinished: function(socket, status) {
              socket.onClose(1006, "Connection interrupted (" + status + ")", false);
            }
          };
          var http_streaming_socket = http_streaming_socket_hooks;
          var http_polling_socket_hooks = {
            getReceiveURL: function(url, session) {
              return url.base + "/" + session + "/xhr" + url.queryString;
            },
            onHeartbeat: function() {
            },
            sendHeartbeat: function(socket) {
              socket.sendRaw("[]");
            },
            onFinished: function(socket, status) {
              if (status === 200) {
                socket.reconnect();
              } else {
                socket.onClose(1006, "Connection interrupted (" + status + ")", false);
              }
            }
          };
          var http_polling_socket = http_polling_socket_hooks;
          var http_xhr_request_hooks = {
            getRequest: function(socket) {
              var Constructor = runtime.getXHRAPI();
              var xhr = new Constructor();
              xhr.onreadystatechange = xhr.onprogress = function() {
                switch (xhr.readyState) {
                  case 3:
                    if (xhr.responseText && xhr.responseText.length > 0) {
                      socket.onChunk(xhr.status, xhr.responseText);
                    }
                    break;
                  case 4:
                    if (xhr.responseText && xhr.responseText.length > 0) {
                      socket.onChunk(xhr.status, xhr.responseText);
                    }
                    socket.emit("finished", xhr.status);
                    socket.close();
                    break;
                }
              };
              return xhr;
            },
            abortRequest: function(xhr) {
              xhr.onreadystatechange = null;
              xhr.abort();
            }
          };
          var http_xhr_request = http_xhr_request_hooks;
          var HTTP = {
            createStreamingSocket: function(url) {
              return this.createSocket(http_streaming_socket, url);
            },
            createPollingSocket: function(url) {
              return this.createSocket(http_polling_socket, url);
            },
            createSocket: function(hooks, url) {
              return new http_socket(hooks, url);
            },
            createXHR: function(method, url) {
              return this.createRequest(http_xhr_request, method, url);
            },
            createRequest: function(hooks, method, url) {
              return new http_request(hooks, method, url);
            }
          };
          var http_http = HTTP;
          http_http.createXDR = function(method, url) {
            return this.createRequest(http_xdomain_request, method, url);
          };
          var web_http_http = http_http;
          var Runtime = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers,
            DependenciesReceivers,
            getDefaultStrategy: default_strategy,
            Transports: transports_transports,
            transportConnectionInitializer: transport_connection_initializer,
            HTTPFactory: web_http_http,
            TimelineTransport: jsonp_timeline,
            getXHRAPI: function() {
              return window.XMLHttpRequest;
            },
            getWebSocketAPI: function() {
              return window.WebSocket || window.MozWebSocket;
            },
            setup: function(PusherClass) {
              var _this = this;
              window.Pusher = PusherClass;
              var initializeOnDocumentBody = function() {
                _this.onDocumentBody(PusherClass.ready);
              };
              if (!window.JSON) {
                Dependencies.load("json2", {}, initializeOnDocumentBody);
              } else {
                initializeOnDocumentBody();
              }
            },
            getDocument: function() {
              return document;
            },
            getProtocol: function() {
              return this.getDocument().location.protocol;
            },
            getAuthorizers: function() {
              return { ajax: xhr_auth, jsonp: jsonp_auth };
            },
            onDocumentBody: function(callback) {
              var _this = this;
              if (document.body) {
                callback();
              } else {
                setTimeout(function() {
                  _this.onDocumentBody(callback);
                }, 0);
              }
            },
            createJSONPRequest: function(url, data) {
              return new jsonp_request(url, data);
            },
            createScriptRequest: function(src) {
              return new script_request(src);
            },
            getLocalStorage: function() {
              try {
                return window.localStorage;
              } catch (e) {
                return void 0;
              }
            },
            createXHR: function() {
              if (this.getXHRAPI()) {
                return this.createXMLHttpRequest();
              } else {
                return this.createMicrosoftXHR();
              }
            },
            createXMLHttpRequest: function() {
              var Constructor = this.getXHRAPI();
              return new Constructor();
            },
            createMicrosoftXHR: function() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            },
            getNetwork: function() {
              return net_info_Network;
            },
            createWebSocket: function(url) {
              var Constructor = this.getWebSocketAPI();
              return new Constructor(url);
            },
            createSocketRequest: function(method, url) {
              if (this.isXHRSupported()) {
                return this.HTTPFactory.createXHR(method, url);
              } else if (this.isXDRSupported(url.indexOf("https:") === 0)) {
                return this.HTTPFactory.createXDR(method, url);
              } else {
                throw "Cross-origin HTTP requests are not supported";
              }
            },
            isXHRSupported: function() {
              var Constructor = this.getXHRAPI();
              return Boolean(Constructor) && new Constructor().withCredentials !== void 0;
            },
            isXDRSupported: function(useTLS) {
              var protocol = useTLS ? "https:" : "http:";
              var documentProtocol = this.getProtocol();
              return Boolean(window["XDomainRequest"]) && documentProtocol === protocol;
            },
            addUnloadListener: function(listener) {
              if (window.addEventListener !== void 0) {
                window.addEventListener("unload", listener, false);
              } else if (window.attachEvent !== void 0) {
                window.attachEvent("onunload", listener);
              }
            },
            removeUnloadListener: function(listener) {
              if (window.addEventListener !== void 0) {
                window.removeEventListener("unload", listener, false);
              } else if (window.detachEvent !== void 0) {
                window.detachEvent("onunload", listener);
              }
            },
            randomInt: function(max) {
              var random = function() {
                var crypto = window.crypto || window["msCrypto"];
                var random2 = crypto.getRandomValues(new Uint32Array(1))[0];
                return random2 / Math.pow(2, 32);
              };
              return Math.floor(random() * max);
            }
          };
          var runtime = Runtime;
          var TimelineLevel;
          (function(TimelineLevel2) {
            TimelineLevel2[TimelineLevel2["ERROR"] = 3] = "ERROR";
            TimelineLevel2[TimelineLevel2["INFO"] = 6] = "INFO";
            TimelineLevel2[TimelineLevel2["DEBUG"] = 7] = "DEBUG";
          })(TimelineLevel || (TimelineLevel = {}));
          var timeline_level = TimelineLevel;
          var timeline_Timeline = function() {
            function Timeline(key, session, options2) {
              this.key = key;
              this.session = session;
              this.events = [];
              this.options = options2 || {};
              this.sent = 0;
              this.uniqueID = 0;
            }
            Timeline.prototype.log = function(level, event) {
              if (level <= this.options.level) {
                this.events.push(extend({}, event, { timestamp: util.now() }));
                if (this.options.limit && this.events.length > this.options.limit) {
                  this.events.shift();
                }
              }
            };
            Timeline.prototype.error = function(event) {
              this.log(timeline_level.ERROR, event);
            };
            Timeline.prototype.info = function(event) {
              this.log(timeline_level.INFO, event);
            };
            Timeline.prototype.debug = function(event) {
              this.log(timeline_level.DEBUG, event);
            };
            Timeline.prototype.isEmpty = function() {
              return this.events.length === 0;
            };
            Timeline.prototype.send = function(sendfn, callback) {
              var _this = this;
              var data = extend({
                session: this.session,
                bundle: this.sent + 1,
                key: this.key,
                lib: "js",
                version: this.options.version,
                cluster: this.options.cluster,
                features: this.options.features,
                timeline: this.events
              }, this.options.params);
              this.events = [];
              sendfn(data, function(error, result) {
                if (!error) {
                  _this.sent++;
                }
                if (callback) {
                  callback(error, result);
                }
              });
              return true;
            };
            Timeline.prototype.generateUniqueID = function() {
              this.uniqueID++;
              return this.uniqueID;
            };
            return Timeline;
          }();
          var timeline_timeline = timeline_Timeline;
          var transport_strategy_TransportStrategy = function() {
            function TransportStrategy(name2, priority, transport, options2) {
              this.name = name2;
              this.priority = priority;
              this.transport = transport;
              this.options = options2 || {};
            }
            TransportStrategy.prototype.isSupported = function() {
              return this.transport.isSupported({
                useTLS: this.options.useTLS
              });
            };
            TransportStrategy.prototype.connect = function(minPriority, callback) {
              var _this = this;
              if (!this.isSupported()) {
                return failAttempt(new UnsupportedStrategy(), callback);
              } else if (this.priority < minPriority) {
                return failAttempt(new TransportPriorityTooLow(), callback);
              }
              var connected = false;
              var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
              var handshake = null;
              var onInitialized = function() {
                transport.unbind("initialized", onInitialized);
                transport.connect();
              };
              var onOpen = function() {
                handshake = factory2.createHandshake(transport, function(result) {
                  connected = true;
                  unbindListeners();
                  callback(null, result);
                });
              };
              var onError = function(error) {
                unbindListeners();
                callback(error);
              };
              var onClosed = function() {
                unbindListeners();
                var serializedTransport;
                serializedTransport = safeJSONStringify(transport);
                callback(new TransportClosed(serializedTransport));
              };
              var unbindListeners = function() {
                transport.unbind("initialized", onInitialized);
                transport.unbind("open", onOpen);
                transport.unbind("error", onError);
                transport.unbind("closed", onClosed);
              };
              transport.bind("initialized", onInitialized);
              transport.bind("open", onOpen);
              transport.bind("error", onError);
              transport.bind("closed", onClosed);
              transport.initialize();
              return {
                abort: function() {
                  if (connected) {
                    return;
                  }
                  unbindListeners();
                  if (handshake) {
                    handshake.close();
                  } else {
                    transport.close();
                  }
                },
                forceMinPriority: function(p) {
                  if (connected) {
                    return;
                  }
                  if (_this.priority < p) {
                    if (handshake) {
                      handshake.close();
                    } else {
                      transport.close();
                    }
                  }
                }
              };
            };
            return TransportStrategy;
          }();
          var transport_strategy = transport_strategy_TransportStrategy;
          function failAttempt(error, callback) {
            util.defer(function() {
              callback(error);
            });
            return {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          var strategy_builder_Transports = runtime.Transports;
          var strategy_builder_defineTransport = function(config, name2, type, priority, options2, manager) {
            var transportClass = strategy_builder_Transports[type];
            if (!transportClass) {
              throw new UnsupportedTransport(type);
            }
            var enabled = (!config.enabledTransports || arrayIndexOf(config.enabledTransports, name2) !== -1) && (!config.disabledTransports || arrayIndexOf(config.disabledTransports, name2) === -1);
            var transport;
            if (enabled) {
              options2 = Object.assign({ ignoreNullOrigin: config.ignoreNullOrigin }, options2);
              transport = new transport_strategy(name2, priority, manager ? manager.getAssistant(transportClass) : transportClass, options2);
            } else {
              transport = strategy_builder_UnsupportedStrategy;
            }
            return transport;
          };
          var strategy_builder_UnsupportedStrategy = {
            isSupported: function() {
              return false;
            },
            connect: function(_, callback) {
              var deferred = util.defer(function() {
                callback(new UnsupportedStrategy());
              });
              return {
                abort: function() {
                  deferred.ensureAborted();
                },
                forceMinPriority: function() {
                }
              };
            }
          };
          function validateOptions(options2) {
            if (options2 == null) {
              throw "You must pass an options object";
            }
            if (options2.cluster == null) {
              throw "Options object must provide a cluster";
            }
            if ("disableStats" in options2) {
              logger2.warn("The disableStats option is deprecated in favor of enableStats");
            }
          }
          var composeChannelQuery = function(params, authOptions) {
            var query = "socket_id=" + encodeURIComponent(params.socketId);
            for (var key in authOptions.params) {
              query += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(authOptions.params[key]);
            }
            if (authOptions.paramsProvider != null) {
              var dynamicParams = authOptions.paramsProvider();
              for (var key in dynamicParams) {
                query += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(dynamicParams[key]);
              }
            }
            return query;
          };
          var UserAuthenticator = function(authOptions) {
            if (typeof runtime.getAuthorizers()[authOptions.transport] === "undefined") {
              throw "'" + authOptions.transport + "' is not a recognized auth transport";
            }
            return function(params, callback) {
              var query = composeChannelQuery(params, authOptions);
              runtime.getAuthorizers()[authOptions.transport](runtime, query, authOptions, AuthRequestType.UserAuthentication, callback);
            };
          };
          var user_authenticator = UserAuthenticator;
          var channel_authorizer_composeChannelQuery = function(params, authOptions) {
            var query = "socket_id=" + encodeURIComponent(params.socketId);
            query += "&channel_name=" + encodeURIComponent(params.channelName);
            for (var key in authOptions.params) {
              query += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(authOptions.params[key]);
            }
            if (authOptions.paramsProvider != null) {
              var dynamicParams = authOptions.paramsProvider();
              for (var key in dynamicParams) {
                query += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(dynamicParams[key]);
              }
            }
            return query;
          };
          var ChannelAuthorizer = function(authOptions) {
            if (typeof runtime.getAuthorizers()[authOptions.transport] === "undefined") {
              throw "'" + authOptions.transport + "' is not a recognized auth transport";
            }
            return function(params, callback) {
              var query = channel_authorizer_composeChannelQuery(params, authOptions);
              runtime.getAuthorizers()[authOptions.transport](runtime, query, authOptions, AuthRequestType.ChannelAuthorization, callback);
            };
          };
          var channel_authorizer = ChannelAuthorizer;
          var ChannelAuthorizerProxy = function(pusher2, authOptions, channelAuthorizerGenerator) {
            var deprecatedAuthorizerOptions = {
              authTransport: authOptions.transport,
              authEndpoint: authOptions.endpoint,
              auth: {
                params: authOptions.params,
                headers: authOptions.headers
              }
            };
            return function(params, callback) {
              var channel2 = pusher2.channel(params.channelName);
              var channelAuthorizer = channelAuthorizerGenerator(channel2, deprecatedAuthorizerOptions);
              channelAuthorizer.authorize(params.socketId, callback);
            };
          };
          var __assign = function() {
            __assign = Object.assign || function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
              }
              return t;
            };
            return __assign.apply(this, arguments);
          };
          function getConfig(opts, pusher2) {
            var config = {
              activityTimeout: opts.activityTimeout || defaults.activityTimeout,
              cluster: opts.cluster,
              httpPath: opts.httpPath || defaults.httpPath,
              httpPort: opts.httpPort || defaults.httpPort,
              httpsPort: opts.httpsPort || defaults.httpsPort,
              pongTimeout: opts.pongTimeout || defaults.pongTimeout,
              statsHost: opts.statsHost || defaults.stats_host,
              unavailableTimeout: opts.unavailableTimeout || defaults.unavailableTimeout,
              wsPath: opts.wsPath || defaults.wsPath,
              wsPort: opts.wsPort || defaults.wsPort,
              wssPort: opts.wssPort || defaults.wssPort,
              enableStats: getEnableStatsConfig(opts),
              httpHost: getHttpHost(opts),
              useTLS: shouldUseTLS(opts),
              wsHost: getWebsocketHost(opts),
              userAuthenticator: buildUserAuthenticator(opts),
              channelAuthorizer: buildChannelAuthorizer(opts, pusher2)
            };
            if ("disabledTransports" in opts)
              config.disabledTransports = opts.disabledTransports;
            if ("enabledTransports" in opts)
              config.enabledTransports = opts.enabledTransports;
            if ("ignoreNullOrigin" in opts)
              config.ignoreNullOrigin = opts.ignoreNullOrigin;
            if ("timelineParams" in opts)
              config.timelineParams = opts.timelineParams;
            if ("nacl" in opts) {
              config.nacl = opts.nacl;
            }
            return config;
          }
          function getHttpHost(opts) {
            if (opts.httpHost) {
              return opts.httpHost;
            }
            if (opts.cluster) {
              return "sockjs-" + opts.cluster + ".pusher.com";
            }
            return defaults.httpHost;
          }
          function getWebsocketHost(opts) {
            if (opts.wsHost) {
              return opts.wsHost;
            }
            return getWebsocketHostFromCluster(opts.cluster);
          }
          function getWebsocketHostFromCluster(cluster) {
            return "ws-" + cluster + ".pusher.com";
          }
          function shouldUseTLS(opts) {
            if (runtime.getProtocol() === "https:") {
              return true;
            } else if (opts.forceTLS === false) {
              return false;
            }
            return true;
          }
          function getEnableStatsConfig(opts) {
            if ("enableStats" in opts) {
              return opts.enableStats;
            }
            if ("disableStats" in opts) {
              return !opts.disableStats;
            }
            return false;
          }
          function buildUserAuthenticator(opts) {
            var userAuthentication = __assign(__assign({}, defaults.userAuthentication), opts.userAuthentication);
            if ("customHandler" in userAuthentication && userAuthentication["customHandler"] != null) {
              return userAuthentication["customHandler"];
            }
            return user_authenticator(userAuthentication);
          }
          function buildChannelAuth(opts, pusher2) {
            var channelAuthorization;
            if ("channelAuthorization" in opts) {
              channelAuthorization = __assign(__assign({}, defaults.channelAuthorization), opts.channelAuthorization);
            } else {
              channelAuthorization = {
                transport: opts.authTransport || defaults.authTransport,
                endpoint: opts.authEndpoint || defaults.authEndpoint
              };
              if ("auth" in opts) {
                if ("params" in opts.auth)
                  channelAuthorization.params = opts.auth.params;
                if ("headers" in opts.auth)
                  channelAuthorization.headers = opts.auth.headers;
              }
              if ("authorizer" in opts)
                channelAuthorization.customHandler = ChannelAuthorizerProxy(pusher2, channelAuthorization, opts.authorizer);
            }
            return channelAuthorization;
          }
          function buildChannelAuthorizer(opts, pusher2) {
            var channelAuthorization = buildChannelAuth(opts, pusher2);
            if ("customHandler" in channelAuthorization && channelAuthorization["customHandler"] != null) {
              return channelAuthorization["customHandler"];
            }
            return channel_authorizer(channelAuthorization);
          }
          var watchlist_extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var watchlist_WatchlistFacade = function(_super) {
            watchlist_extends(WatchlistFacade, _super);
            function WatchlistFacade(pusher2) {
              var _this = _super.call(this, function(eventName, data) {
                logger2.debug("No callbacks on watchlist events for " + eventName);
              }) || this;
              _this.pusher = pusher2;
              _this.bindWatchlistInternalEvent();
              return _this;
            }
            WatchlistFacade.prototype.handleEvent = function(pusherEvent) {
              var _this = this;
              pusherEvent.data.events.forEach(function(watchlistEvent) {
                _this.emit(watchlistEvent.name, watchlistEvent);
              });
            };
            WatchlistFacade.prototype.bindWatchlistInternalEvent = function() {
              var _this = this;
              this.pusher.connection.bind("message", function(pusherEvent) {
                var eventName = pusherEvent.event;
                if (eventName === "pusher_internal:watchlist_events") {
                  _this.handleEvent(pusherEvent);
                }
              });
            };
            return WatchlistFacade;
          }(dispatcher);
          var watchlist = watchlist_WatchlistFacade;
          function flatPromise() {
            var resolve, reject;
            var promise = new Promise(function(res, rej) {
              resolve = res;
              reject = rej;
            });
            return { promise, resolve, reject };
          }
          var flat_promise = flatPromise;
          var user_extends = function() {
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var user_UserFacade = function(_super) {
            user_extends(UserFacade, _super);
            function UserFacade(pusher2) {
              var _this = _super.call(this, function(eventName, data) {
                logger2.debug("No callbacks on user for " + eventName);
              }) || this;
              _this.signin_requested = false;
              _this.user_data = null;
              _this.serverToUserChannel = null;
              _this.signinDonePromise = null;
              _this._signinDoneResolve = null;
              _this._onAuthorize = function(err, authData) {
                if (err) {
                  logger2.warn("Error during signin: " + err);
                  _this._cleanup();
                  return;
                }
                _this.pusher.send_event("pusher:signin", {
                  auth: authData.auth,
                  user_data: authData.user_data
                });
              };
              _this.pusher = pusher2;
              _this.pusher.connection.bind("state_change", function(_a) {
                var previous = _a.previous, current = _a.current;
                if (previous !== "connected" && current === "connected") {
                  _this._signin();
                }
                if (previous === "connected" && current !== "connected") {
                  _this._cleanup();
                  _this._newSigninPromiseIfNeeded();
                }
              });
              _this.watchlist = new watchlist(pusher2);
              _this.pusher.connection.bind("message", function(event) {
                var eventName = event.event;
                if (eventName === "pusher:signin_success") {
                  _this._onSigninSuccess(event.data);
                }
                if (_this.serverToUserChannel && _this.serverToUserChannel.name === event.channel) {
                  _this.serverToUserChannel.handleEvent(event);
                }
              });
              return _this;
            }
            UserFacade.prototype.signin = function() {
              if (this.signin_requested) {
                return;
              }
              this.signin_requested = true;
              this._signin();
            };
            UserFacade.prototype._signin = function() {
              if (!this.signin_requested) {
                return;
              }
              this._newSigninPromiseIfNeeded();
              if (this.pusher.connection.state !== "connected") {
                return;
              }
              this.pusher.config.userAuthenticator({
                socketId: this.pusher.connection.socket_id
              }, this._onAuthorize);
            };
            UserFacade.prototype._onSigninSuccess = function(data) {
              try {
                this.user_data = JSON.parse(data.user_data);
              } catch (e) {
                logger2.error("Failed parsing user data after signin: " + data.user_data);
                this._cleanup();
                return;
              }
              if (typeof this.user_data.id !== "string" || this.user_data.id === "") {
                logger2.error("user_data doesn't contain an id. user_data: " + this.user_data);
                this._cleanup();
                return;
              }
              this._signinDoneResolve();
              this._subscribeChannels();
            };
            UserFacade.prototype._subscribeChannels = function() {
              var _this = this;
              var ensure_subscribed = function(channel2) {
                if (channel2.subscriptionPending && channel2.subscriptionCancelled) {
                  channel2.reinstateSubscription();
                } else if (!channel2.subscriptionPending && _this.pusher.connection.state === "connected") {
                  channel2.subscribe();
                }
              };
              this.serverToUserChannel = new channels_channel("#server-to-user-" + this.user_data.id, this.pusher);
              this.serverToUserChannel.bind_global(function(eventName, data) {
                if (eventName.indexOf("pusher_internal:") === 0 || eventName.indexOf("pusher:") === 0) {
                  return;
                }
                _this.emit(eventName, data);
              });
              ensure_subscribed(this.serverToUserChannel);
            };
            UserFacade.prototype._cleanup = function() {
              this.user_data = null;
              if (this.serverToUserChannel) {
                this.serverToUserChannel.unbind_all();
                this.serverToUserChannel.disconnect();
                this.serverToUserChannel = null;
              }
              if (this.signin_requested) {
                this._signinDoneResolve();
              }
            };
            UserFacade.prototype._newSigninPromiseIfNeeded = function() {
              if (!this.signin_requested) {
                return;
              }
              if (this.signinDonePromise && !this.signinDonePromise.done) {
                return;
              }
              var _a = flat_promise(), promise = _a.promise, resolve = _a.resolve;
              promise.done = false;
              var setDone = function() {
                promise.done = true;
              };
              promise.then(setDone)["catch"](setDone);
              this.signinDonePromise = promise;
              this._signinDoneResolve = resolve;
            };
            return UserFacade;
          }(dispatcher);
          var user = user_UserFacade;
          var pusher_Pusher = function() {
            function Pusher2(app_key, options2) {
              var _this = this;
              checkAppKey(app_key);
              validateOptions(options2);
              this.key = app_key;
              this.config = getConfig(options2, this);
              this.channels = factory2.createChannels();
              this.global_emitter = new dispatcher();
              this.sessionID = runtime.randomInt(1e9);
              this.timeline = new timeline_timeline(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: Pusher2.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: timeline_level.INFO,
                version: defaults.VERSION
              });
              if (this.config.enableStats) {
                this.timelineSender = factory2.createTimelineSender(this.timeline, {
                  host: this.config.statsHost,
                  path: "/timeline/v2/" + runtime.TimelineTransport.name
                });
              }
              var getStrategy = function(options3) {
                return runtime.getDefaultStrategy(_this.config, options3, strategy_builder_defineTransport);
              };
              this.connection = factory2.createConnectionManager(this.key, {
                getStrategy,
                timeline: this.timeline,
                activityTimeout: this.config.activityTimeout,
                pongTimeout: this.config.pongTimeout,
                unavailableTimeout: this.config.unavailableTimeout,
                useTLS: Boolean(this.config.useTLS)
              });
              this.connection.bind("connected", function() {
                _this.subscribeAll();
                if (_this.timelineSender) {
                  _this.timelineSender.send(_this.connection.isUsingTLS());
                }
              });
              this.connection.bind("message", function(event) {
                var eventName = event.event;
                var internal = eventName.indexOf("pusher_internal:") === 0;
                if (event.channel) {
                  var channel2 = _this.channel(event.channel);
                  if (channel2) {
                    channel2.handleEvent(event);
                  }
                }
                if (!internal) {
                  _this.global_emitter.emit(event.event, event.data);
                }
              });
              this.connection.bind("connecting", function() {
                _this.channels.disconnect();
              });
              this.connection.bind("disconnected", function() {
                _this.channels.disconnect();
              });
              this.connection.bind("error", function(err) {
                logger2.warn(err);
              });
              Pusher2.instances.push(this);
              this.timeline.info({ instances: Pusher2.instances.length });
              this.user = new user(this);
              if (Pusher2.isReady) {
                this.connect();
              }
            }
            Pusher2.ready = function() {
              Pusher2.isReady = true;
              for (var i = 0, l = Pusher2.instances.length; i < l; i++) {
                Pusher2.instances[i].connect();
              }
            };
            Pusher2.getClientFeatures = function() {
              return keys(filterObject({ ws: runtime.Transports.ws }, function(t) {
                return t.isSupported({});
              }));
            };
            Pusher2.prototype.channel = function(name2) {
              return this.channels.find(name2);
            };
            Pusher2.prototype.allChannels = function() {
              return this.channels.all();
            };
            Pusher2.prototype.connect = function() {
              this.connection.connect();
              if (this.timelineSender) {
                if (!this.timelineSenderTimer) {
                  var usingTLS = this.connection.isUsingTLS();
                  var timelineSender = this.timelineSender;
                  this.timelineSenderTimer = new PeriodicTimer(6e4, function() {
                    timelineSender.send(usingTLS);
                  });
                }
              }
            };
            Pusher2.prototype.disconnect = function() {
              this.connection.disconnect();
              if (this.timelineSenderTimer) {
                this.timelineSenderTimer.ensureAborted();
                this.timelineSenderTimer = null;
              }
            };
            Pusher2.prototype.bind = function(event_name, callback, context) {
              this.global_emitter.bind(event_name, callback, context);
              return this;
            };
            Pusher2.prototype.unbind = function(event_name, callback, context) {
              this.global_emitter.unbind(event_name, callback, context);
              return this;
            };
            Pusher2.prototype.bind_global = function(callback) {
              this.global_emitter.bind_global(callback);
              return this;
            };
            Pusher2.prototype.unbind_global = function(callback) {
              this.global_emitter.unbind_global(callback);
              return this;
            };
            Pusher2.prototype.unbind_all = function(callback) {
              this.global_emitter.unbind_all();
              return this;
            };
            Pusher2.prototype.subscribeAll = function() {
              var channelName;
              for (channelName in this.channels.channels) {
                if (this.channels.channels.hasOwnProperty(channelName)) {
                  this.subscribe(channelName);
                }
              }
            };
            Pusher2.prototype.subscribe = function(channel_name) {
              var channel2 = this.channels.add(channel_name, this);
              if (channel2.subscriptionPending && channel2.subscriptionCancelled) {
                channel2.reinstateSubscription();
              } else if (!channel2.subscriptionPending && this.connection.state === "connected") {
                channel2.subscribe();
              }
              return channel2;
            };
            Pusher2.prototype.unsubscribe = function(channel_name) {
              var channel2 = this.channels.find(channel_name);
              if (channel2 && channel2.subscriptionPending) {
                channel2.cancelSubscription();
              } else {
                channel2 = this.channels.remove(channel_name);
                if (channel2 && channel2.subscribed) {
                  channel2.unsubscribe();
                }
              }
            };
            Pusher2.prototype.send_event = function(event_name, data, channel2) {
              return this.connection.send_event(event_name, data, channel2);
            };
            Pusher2.prototype.shouldUseTLS = function() {
              return this.config.useTLS;
            };
            Pusher2.prototype.signin = function() {
              this.user.signin();
            };
            Pusher2.instances = [];
            Pusher2.isReady = false;
            Pusher2.logToConsole = false;
            Pusher2.Runtime = runtime;
            Pusher2.ScriptReceivers = runtime.ScriptReceivers;
            Pusher2.DependenciesReceivers = runtime.DependenciesReceivers;
            Pusher2.auth_callbacks = runtime.auth_callbacks;
            return Pusher2;
          }();
          var core_pusher = __webpack_exports__["default"] = pusher_Pusher;
          function checkAppKey(key) {
            if (key === null || key === void 0) {
              throw "You must pass your app key when you instantiate Pusher.";
            }
          }
          runtime.setup(pusher_Pusher);
        }
        /******/
      ])
    );
  });
})(pusher);
const Pusher$1 = /* @__PURE__ */ getDefaultExportFromCjs(pusherExports);
const _EventoNotificacaoWS = class {
  constructor() {
    this.cancelled = false;
    this.notify = () => {
      _EventoNotificacaoWS.listeners.forEach((listener) => {
        if (!this.cancelled) {
          listener.callback(this);
        }
      });
    };
  }
};
let EventoNotificacaoWS = _EventoNotificacaoWS;
EventoNotificacaoWS.listeners = [];
EventoNotificacaoWS.addListener = function(listener) {
  _EventoNotificacaoWS.listeners.push(listener);
  _EventoNotificacaoWS.listeners.sort((a, b) => a.priority - b.priority);
};
class Notificacao {
}
const _MensagemExcluida = class {
  constructor() {
    this.cancelled = false;
    this.notify = () => {
      _MensagemExcluida.listeners.forEach((listener) => {
        if (!this.cancelled) {
          listener.callback(this);
        }
      });
    };
  }
};
let MensagemExcluida = _MensagemExcluida;
MensagemExcluida.listeners = [];
MensagemExcluida.addListener = function addListener(listener) {
  _MensagemExcluida.listeners.push(listener);
  _MensagemExcluida.listeners.sort((a, b) => a.priority - b.priority);
};
const _NovaMensagem = class {
  constructor() {
    this.cancelled = false;
    this.notify = () => {
      _NovaMensagem.listeners.forEach((listener) => {
        if (!this.cancelled) {
          listener.callback(this);
        }
      });
    };
  }
};
let NovaMensagem = _NovaMensagem;
NovaMensagem.listeners = [];
NovaMensagem.addListener = function addListener2(listener) {
  _NovaMensagem.listeners.push(listener);
  _NovaMensagem.listeners.sort((a, b) => a.priority - b.priority);
};
const options = {
  broadcaster: "pusher",
  key: "app-key",
  cluster: "mt1",
  forceTLS: false,
  wsHost: "localhost",
  wsPort: "10010",
  wssPort: "10010",
  httpHost: "localhost",
  authEndpoint: "/broadcasting/auth"
};
let userId = null;
let channel = null;
function conectarWS() {
  onMounted(() => {
    iniciarNotificacoes();
  });
}
function iniciarNotificacoes() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if (userId === ((_d = (_c = (_b = (_a = J()) == null ? void 0 : _a.props) == null ? void 0 : _b.auth) == null ? void 0 : _c.user) == null ? void 0 : _d.id)) {
    return;
  }
  if (channel) {
    window.Echo.leave(channel);
  }
  userId = (_h = (_g = (_f = (_e = J()) == null ? void 0 : _e.props) == null ? void 0 : _f.auth) == null ? void 0 : _g.user) == null ? void 0 : _h.id;
  if (!userId) {
    return;
  }
  iniciarPusher();
}
function iniciarPusher() {
  window.Echo = new Echo({
    ...options,
    client: new Pusher$1(options.key, options)
  });
  channel = `notificacoes.${userId}`;
  window.Echo.private(channel).listen(".ConversaWebSocket", (e) => conversaWebSocket(e)).listen(".NotificacaoWebSocket", (e) => notificacaoWebSocket(e));
  window.Pusher = Pusher$1;
}
function conversaWebSocket(e) {
  switch (e.notification.tipo) {
    case "nova-mensagem":
      novaMensagemEvento(e);
      break;
    case "mensagem-excluida":
      mensagemExcuidaEvento(e);
      break;
  }
}
function notificacaoWebSocket(e) {
  const evento = new EventoNotificacaoWS();
  evento.notificacao = new Notificacao();
  evento.notificacao.id = e.notification.notificacao.id;
  evento.notificacao.status = e.notification.notificacao.status;
  evento.notificacao.usuario_id = e.notification.notificacao.usuario_id;
  evento.notificacao.titulo = e.notification.notificacao.titulo;
  evento.notificacao.texto = e.notification.notificacao.texto;
  evento.notify();
}
function mensagemExcuidaEvento(e) {
  const evento = new MensagemExcluida();
  evento.mensagem_id = e.notification.mensagem.id;
  evento.equipamento_conversa_id = e.notification.mensagem.equipamento_conversa_id;
  evento.notify();
}
function novaMensagemEvento(e) {
  const evento = new NovaMensagem();
  evento.mensagem_id = e.notification.mensagem.id;
  evento.mensagem = e.notification.mensagem.mensagem;
  evento.usuario_id = e.notification.mensagem.usuario_id;
  evento.equipamento_conversa_id = e.notification.mensagem.equipamento_conversa_id;
  evento.notify();
}
function setupNotificacoes() {
  conectarWS();
  getPush().iniciarNotificacoes();
}
const _hoisted_1$2 = { class: "toast-header" };
const _hoisted_2 = { class: "me-auto" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("button", {
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "toast",
  "aria-label": "Close"
}, null, -1);
const _hoisted_4 = { class: "toast-body" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Notificacao",
  props: {
    id: Number,
    titulo: String,
    texto: String
  },
  setup(__props) {
    const props = __props;
    const toast = ref(null);
    let bsToast;
    onMounted(() => {
      bsToast = new Toast(toast.value);
      bsToast.show({ autohide: false });
    });
    function onClick() {
      Oe.visit(`/notificacao/${props.id}`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "toast",
        ref: toast,
        class: "toast notificacao",
        role: "alert",
        onClick
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("span", _hoisted_2, toDisplayString(__props.titulo), 1),
          _hoisted_3
        ]),
        createBaseVNode("div", _hoisted_4, toDisplayString(__props.texto), 1)
      ], 512);
    };
  }
});
class Listener {
  constructor(callback, priority = 10) {
    this.priority = priority;
    this.callback = callback;
  }
}
const _hoisted_1$1 = { class: "toast-container position-fixed top-0 end-0 p-3" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Notificacoes",
  setup(__props) {
    setupNotificacoes();
    const notificacoes = ref([]);
    EventoNotificacaoWS.addListener(new Listener(eventoNotificacao));
    function eventoNotificacao(e) {
      notificacoes.value.push(e.notificacao);
      setTimeout(() => {
        const index = notificacoes.value.indexOf(e.notificacao);
        notificacoes.value.splice(index, 1);
      }, 1e5);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(notificacoes.value, (notificacao) => {
          return openBlock(), createBlock(_sfc_main$2, normalizeProps(mergeProps({
            key: notificacao.id
          }, notificacao)), null, 16);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1 = { class: "base-layout" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseLayout",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export {
  Listener as L,
  MensagemExcluida as M,
  NovaMensagem as N,
  _sfc_main as _,
  _sfc_main$3 as a,
  _export_sfc as b,
  getPush as g
};
//# sourceMappingURL=_plugin-vue_export-helper-85f18738.js.map
