---
title: Schemat odpowiedzi od serwera
---

# Schemat odpowiedzi od serwera

Wszystkie odpowiedzi zwracane przez serwer są w formacie JSON i mają następującą składnię:

```ts
interface Response<T> {
    success: boolean;
    data: T;
    errors: {
        code: number;
        message: string;
        localized?: string;
        field?: string;
    }[];
    status: {
        code: number;
        name: string;
    }
}
```

Gdzie:
- `success` - określa, czy zapytanie zakończyło się sukcesem
- `data` - zawiera dane zwrócone przez serwer, typ zależy od zapytania
- `errors` - zawiera listę błędów, które wystąpiły podczas przetwarzania zapytania
    - `code` - kod błędu (patrz [Kody zwrotne oraz kody błędów](/standards/status-codes))
    - `message` - wiadomość błędu
    - `localized` - (opcjonalne) string i18n z tłumaczeniem błędu
    - `field` - (opcjonalne) pole (w zapytaniu), które spowodowało błąd
- `status` - zawiera kod statusu (HTTP) zapytania
    - `code` - kod statusu
    - `name` - nazwa statusu
