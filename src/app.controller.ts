import { Controller, Get } from '@nestjs/common';

@Controller('home5')
export class AppController {
    @Get('zz')
    home() {
        return 'welcome to my movies API';
    }

    @Get('z/hh')
    home2() {
        return 'hh';
    }
}
