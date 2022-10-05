import { IsNotEmpty } from 'class-validator';
import { Request, Response } from "express";
import { spawnSync } from "node:child_process";
import * as service from '../services/service';


export async function showHome(req: Request, res: Response): Promise<void> {
    try {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World\n');
    } catch (e) {
        res.sendStatus(404);
    }
}

export async function getAll(req: Request, res: Response): Promise<void> {
    try {
        let result = await service.getAll();
        res.status(200).send(result);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function getById(req: Request, res: Response): Promise<void> {
    try {
        let id: number = Number(req.query['id']);
        let result = await service.getById(id);
        res.status(200).send(result);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function getPdf(req: Request, res: Response): Promise<void> {
    try {
        let process = spawnSync('C:/Users/82109/AppData/Local/Programs/Python/Python310/python', ['./src/python/pdf.py', 'pdf1.html'], { encoding: 'utf-8' });
        console.log(process.stdout);
        if(process.status) { throw new Error(); }
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function create(req: Request, res: Response): Promise<void> {
    try {
        await service.create(req.body);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function update(req: Request, res: Response): Promise<void> {
    try {
        let id: number = Number(req.query['id']);
        await service.update(id, req.body);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function remove(req: Request, res: Response): Promise<void> {
    try {
        let id: number = Number(req.query['id']);
        await service.remove(id);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}