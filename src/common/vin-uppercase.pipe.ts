import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common'

@Injectable()
export class VinUpperCasePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log('Pipe');
        if (metadata.data === 'vin') {
            return value.toUpperCase();
        }
        return value;
    }
}