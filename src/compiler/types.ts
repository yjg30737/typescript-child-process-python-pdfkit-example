import { IsInt, IsNotEmpty, IsString, Min, ValidationArguments } from 'class-validator';

export interface ConfigDatabase {
    host?: string;
    port?: number;
    user?: string;
    password?: string;
    database?: string;
    connectionLimit?: number;
    dateStrings?: boolean | Array<'TIMESTAMP' | 'DATETIME' | 'DATE'>;
}
export class Person {
    @IsNotEmpty({ message: "이름이 빈값이어서는 안됩니다." })
    @IsString({ message: "이름은 문자열이어야 합니다." })
    name?: string;

    @IsInt({ message: "나이는 숫자여야 합니다."})
    @Min(0, { message: (args: ValidationArguments) => {
        return `나이는 ${args.value}살이 될 수 없습니다. 적어도 ${args.constraints[0]}살 이상이어야 합니다.`
    } })
    age?: number;

    @IsString({ message: "직업은 문자열이어야 합니다." })
    job?: string;
}