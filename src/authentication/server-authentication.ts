export enum Authentication {
    BASIC
}

export interface Credentials {

    /**
     * Set the authenticaiton information for a given user
     *
     * @param {string} username The username of a given user
     * @param {string} password The password of a given user
     */
    set(username: string, password: string): void

    /**
     * Get the authentication information for a given user
     * @example
     *  If the type is set to be BASIC then a base64 encoded token with username:password will be returned
     */
    get(): string

    /**
     * Returns the type of Authentication that this Credentials supports
     */
    auth(): Authentication
}

export interface Server {

    /**
     * Set the server information
     * @param {string} serverAlias - A unique name to give the server
     * @param {string} serverUrl - The URL defining the server, must be fully qualified ex: https://abc.com:881
     * @param {Credentials} credentials - The credentials to authenticate against this server
     */
    set(serverAlias: string, serverUrl: string, credentials: Credentials): void

    /**
     * Returns the server information
     */
    get(): {
        serverAlias: string,
        serverUrl: string
        auth: string,
        type: Authentication
    }

}