export class TokenUtils {

  public static jwtPayload: any;

  public static getToken(): string {
    return localStorage.getItem('token');
  }

  public static saveToken(createdToken: string): void {
    this.jwtPayload = JSON.parse(atob(createdToken.split('.')[1]));

    localStorage.setItem('token', createdToken);
  }

  public static  removeToken(): void {
    this.jwtPayload = null;

    localStorage.removeItem('token');
  }

  public static  loadToken(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.saveToken(token);
    }
  }

}
