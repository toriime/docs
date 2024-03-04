# Start
`@toriime/client` pozwala na łatwą komunikację z naszym API.

## Instalacja

::: code-group

```bash [npm]
$ npm install @toriime/client
```

```bash [yarn]
$ yarn install @toriime/client
```

```bash [pnpm]
$ pnpm install @toriime/client
```
:::

## Użycie

::: code-group

```ts [client.ts]
import { axiosClient } from '@/lib/axios';
import { createClient } from '@toriime/client';

export const toriimeClient = createClient({
    axiosInstance: axiosClient,
});
```

```ts [axios.ts]
import axios from 'axios';

export const axiosClient = axios.create({
  maxBodyLength: Infinity,
  baseURL: 'http://localhost:3001/api',
  withCredentials: true,
});
```
:::

:::info
`@toriime/client` wymaga wcześniej już zainicjalizowanego klienta axios.
:::

### Wysyłanie zapytań

```ts
import { toriimeClient } from './client';

// To zapytanie pobierze wszystkie anime
const response = await toriimeClient.anime.all()

// Możemy użyć prostej funkcji do mapowania errorów
toriimeClient.mapError(response.error, (error) => ...)

const data = response.data
```

### Wewnętrzne błędy

```ts
export enum CustomCodes {
  //sdk errors 4000-4999
  GENERIC_SDK_ERROR = -4000, // kod ogólny w przypadku niespodziewanego błędu
  COMMUNICATION_FAILED = -4001,
  CLIENT_TIMEOUT = -4002,
}

export const errorList: ErrorMap = {
  GENERIC_SDK_ERROR: {
    code: CustomCodes.GENERIC_SDK_ERROR,
    message: 'An unknown error occurred, please contact support.',
    localized: 'sdk.errors.generic_error',
  },
  COMMUNICATION_FAILED: {
    code: CustomCodes.COMMUNICATION_FAILED,
    message: 'Communication with the server failed',
    localized: 'sdk.errors.communication_failed',
  },
  CLIENT_TIMEOUT: {
    code: CustomCodes.CLIENT_TIMEOUT,
    message: 'The request timed out',
    localized: 'sdk.errors.client_timeout',
  },
};

```
- `GENERIC_SDK_ERROR` - ogólny kod błędu w przypadku niespodziewanego błędu
- `COMMUNICATION_FAILED` - błąd komunikacji z serwerem, np. brak połączenia
- `CLIENT_TIMEOUT` - zapytanie przekroczyło czas oczekiwania