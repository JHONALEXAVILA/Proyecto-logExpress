import { error } from 'console';
import { Response } from 'express';

export function sendSuccess(res:Response, data:any){
    res.status(200).json({
        soccess: true,
        data: data,
        error: null

    });

}
export function sendError(res:Response, message:string='interna services error', statusCode:number=500){
    res.status(statusCode).json({
        success: false,
        data: null,
        error: {
            message: message
    }

});
}
    