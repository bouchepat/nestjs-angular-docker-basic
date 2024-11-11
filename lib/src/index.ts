// src/index.ts
export interface MySharedDto {
  id: number;
  name: string;
}

export class MySharedService {
  sayHello(name: string): string {
    return `Hello, ${name}!`;
  }
}
