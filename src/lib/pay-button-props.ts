/**
 * Define all props to be passed to this module
 */

export interface ButtonProps {
  style: object;
  amount: number;
  keyId: string;
  merchantName: string;
  description: string;
  logoUrl: string;
  prefillName: string;
  prefillEmail: string;
  themeColor: string;
  notes: object;
  preProcess: () => {};
  onSucess: (object) => {};
  onError: (object) => {};
  onDismiss: (object) => {};
}
