export class DefaultResponse<T> {
    code: number;
    description: string;
    title: string;
    data: T;
    payload: any;

    constructor() {
        this.title = '';
    }

    /**
     * Método que lança erro no objeto
     * @param data Objeto de erro
     * @param code Campo do erro ocorrido
     * @param message  Erro ocorrido
     */
    public error(
      payload: any,
      code: number = 400,
      message: string = 'Error'
    ): void {
        this.payload = payload;

        try {
            this.title = this.payload.title;
            this.description = this.payload.detail;
            this.data = this.payload.objects;

        } catch {
            this.code = code;
            this.title = message;
        }
    }

    /**
     * Método que lança objeto de sucesso
     * @param data Objeto de retorno
     * @param code Campo do erro ocorrido
     * @param title  Erro ocorrido
     */
    public success(
      type: string,
      data: T,
      code: number = 200,
      title: string = 'Success'
    ): void {
        this.payload = data;
        this.code = code;
        this.title = title;

        switch (type.toUpperCase()) {
            case 'GET':
            case 'DELETE':
            case 'PATCH':
            case 'POST':
            case 'PUT':
                this.data = data;
                return;
        }
    }

}
