import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: process.env.FRONTEND_URL, // Add your frontend URL here 
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Cookie'],
        credentials: true,
    });
    await app.listen(3000);
}
bootstrap();
