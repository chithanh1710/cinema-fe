export interface Transaction {
  id: number;
  id_ticket: number;
  id_staff: number;
  total_amount: number;
  time_transaction: Date;
  type_transaction: string;
}

export interface VoucherUse {
  id: number;
  id_customer: number;
  id_voucher: number;
  date_used: Date;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  rank: string;
  transactions: Transaction[];
  voucher_uses: VoucherUse[];
}
