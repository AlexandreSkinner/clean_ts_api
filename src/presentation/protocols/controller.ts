import { HttpRequest, HttpResponse } from '@/presentation/protocols/http';
export interface Controller {
  handle: (HttpRequest: HttpRequest) => Promise<HttpResponse>
}
