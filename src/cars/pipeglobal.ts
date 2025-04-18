import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class RemoveUndefinedPipe implements PipeTransform {
  transform(value: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    if (typeof value !== 'object' || value === null) return value;
    return Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      Object.entries(value).filter(([, v]) => v !== undefined),
    );
  }
}
