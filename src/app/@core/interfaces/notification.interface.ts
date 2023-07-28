export interface Notification {
  state?: 'success' | 'warning';
  title?: string;
  message: string;
}
