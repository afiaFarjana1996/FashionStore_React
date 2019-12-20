import cookie from 'react-cookies'

const expires = new Date();
expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);

export const setCookie = (key,data) => {
    cookie.save(key,data,{
        path: '/',
        expires,
        maxAge: 1000,
    });
}

export const loadCookie = (key) => {
    cookie.load(key);
}

export const removeCookie = (key) => {
    cookie.remove(key,{
        path: '/',
        expires,
        maxAge: 1000,
    });
}
