# Zadanie 7 — Client (React)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=misiuleczek02_zadanie7-client&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=misiuleczek02_zadanie7-client)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=misiuleczek02_zadanie7-client&metric=bugs)](https://sonarcloud.io/summary/new_code?id=misiuleczek02_zadanie7-client)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=misiuleczek02_zadanie7-client&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=misiuleczek02_zadanie7-client)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=misiuleczek02_zadanie7-client&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=misiuleczek02_zadanie7-client)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=misiuleczek02_zadanie7-client&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=misiuleczek02_zadanie7-client)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=misiuleczek02_zadanie7-client&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=misiuleczek02_zadanie7-client)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=misiuleczek02_zadanie7-client&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=misiuleczek02_zadanie7-client)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=misiuleczek02_zadanie7-client&metric=coverage)](https://sonarcloud.io/summary/new_code?id=misiuleczek02_zadanie7-client)

Aplikacja kliencka w React.

## Funkcjonalności

- Lista produktów (pobierana z API serwera)
- Koszyk (React Context)
- Płatność (POST do API serwera)
- Routing przez `react-router-dom`

## Konfiguracja API

Zmienna środowiskowa:

```
REACT_APP_API_URL=http://localhost:8080
```

## Skrypty

```
npm install
npm start            # dev server na :3000
npm run build        # build produkcyjny
npm test             # testy + raport pokrycia (lcov)
npm run lint         # ESLint
```

## SonarCloud

- klucz projektu: `misiuleczek02_zadanie7-client`
- workflow: `.github/workflows/sonarcloud.yml`
- konfiguracja: `sonar-project.properties`
