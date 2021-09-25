import { Request, Response } from 'express';
import shortId from 'shortid';

import { UrlModel } from './../databases/models/url_model';
import { config } from './../configs/constantes_configs';

export class UrlController{
    public async encurtador(req: Request, res:Response): Promise<void>{
        const {originalUrl} = req.body;
        const url = await UrlModel.findOne({originalUrl});
        if(url){
            res.json(url);
            return;
        }
        const hash = shortId.generate();
        const url_encurtada = `${config.API_URL}/${hash}`;
        const newUrl = await UrlModel.create({hash, url_encurtada, originalUrl });
        res.json(newUrl);
    }
    public async redireciona(req: Request, res:Response): Promise<void>{
        const {hash} = req.params;
        const url = await UrlModel.findOne({hash});
        if(url){
            res.redirect(url.originalUrl);
            return;
        }
        res.status(400).json({ error: 'Não tem essa Url cadastrada' })
    }
}