/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DIAGNOSTIC_WEBHOOK_URL?: string;
  readonly VITE_ANALYTICS_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
