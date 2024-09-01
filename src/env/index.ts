declare global {
  interface ImportMeta {
	readonly env: {
      VITE_APP_JOYID_APP_URL: string;
	  readonly VITE_APP_CALLBACK_SERVER_URL: string;
	};
  }
}

export const CALLBACK_SERVER_URL = import.meta.env.VITE_APP_CALLBACK_SERVER_URL ?? "";
export const JOYID_APP_URL = import.meta.env.VITE_APP_JOYID_APP_URL ?? "https://testnet.joyid.dev/";
