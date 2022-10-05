import { Person } from '../compiler/types';
import poolPromise from '../database/db_config';

async function execQuery(q: string, value?: number | Array<any>) {
    const conn = await poolPromise.getConnection();
    try {
        return await conn.query(q, value);
    } catch (e: any) {
        throw new Error(e);
    } finally {
        conn.release();
    }
}

export async function getAll() {
    let q: string = 'SELECT * FROM people';
    return await execQuery(q).then(result => result[0]);
}

export async function getById(id: number) {
    let q: string = 'SELECT * FROM people WHERE id=?';
    return await execQuery(q, id).then(result => result[0]);
}

export async function create(param: Person) {
    let q: string = 'INSERT INTO people (name, age, job) VALUES (?, ?, ?)';
    return await execQuery(q, [param.name, param.age, param.job]);
}

export async function update(id: number, param: Person) {
    let q: string = 'UPDATE people SET name=?, age=?, job=? WHERE id=?';
    return await execQuery(q, [param.name, param.age, param.job, id]);
}

export async function remove(id: number) {
    let q: string = 'DELETE FROM people WHERE id=?';
    return await execQuery(q, id);
}