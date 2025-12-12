export interface User {
  id?: string;
  name?: string | null;
  phoneNumber: string;
  balance: number;
  virtual_balance_cfa: number;
  activated: number | boolean;
  has_invested?: boolean;
  investment_start_time?: string | null; // Timestamp
  investment_processed?: boolean;
}

export enum AppView {
  LANDING = 'LANDING',
  AUTH = 'AUTH',
  DASHBOARD = 'DASHBOARD',
}

export enum ModalType {
  NONE = 'NONE',
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
  ACTIVATE = 'ACTIVATE',
}