import { config } from './../configs/constantes_configs';
import { connect } from 'mongoose';

export class MongoConnection{
    public async connect():Promise<void>{
        try {
            await connect(config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log('🎉 Database connected')
        } catch (error) {
            console.error(error.message)
            process.exit(1)
        }
    }
}