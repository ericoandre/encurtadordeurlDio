import { prop, Typegoose } from '@hasezoey/typegoose';

class Url extends Typegoose{
    @prop({ required: true })
    hash: string

    @prop({ required: true })
    originalUrl: string

    @prop({ required: true })
    url_encurtada: string
}

export const UrlModel = new Url().getModelForClass(Url);