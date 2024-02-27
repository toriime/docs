---
title: Kody zwrotne oraz błedów
---

# Kody zwrotne oraz kody błedów

Z myślą o róźnych zastosowaniach API naszych usług, stworzyliśmy zestaw kodów zwrotnych oraz błędów, które mogą być zwracane przez nasze usługi.

Aby nie mylić ich z kodami HTTP, wszystkie kody są ujemne (tzn. zaczynają się od `-`).

::: details Dowiedz się więcej
Nasze kody zwrotne oraz błędów są podzielone na kilka kategorii:
- błędy spowodowane przez użytkownika (1000 - 1999)
    - 1100 - 1199 - błędy związane z formularzami
- błędy spowodowane przez serwer (2000 - 4999)
    - 2000 - 2999 - błędy serwera auth
    - 3000 - 3099 - błędy oauth2
- inne
    - 1 - błąd ogólny
:::

## Błędy spowodowane przez użytkownika (1000 - 1999)

| Kod | Nazwa | Opis 
| - | - | - 
| -1100 | UNKNOWN_FIELD | W zapytaniu zostało zawarte pole, które nie jest obsługiwane.
| -1101 | FIELD_REQUIRED | W zapytaniu nie zostało zawarte pole, które jest wymagane.
| -1102 | INVALID_EMAIL | W zapytaniu został zawarty nieprawidłowy adres e-mail.
| -1103 | PASSWORD_TOO_SHORT | W zapytaniu zostało zawarte hasło, które jest za krótkie.
| -1104 | PASSWORD_TOO_LONG | W zapytaniu zostało zawarte hasło, które jest za długie.
| -1105 | PASSWORD_NOT_MATCHING | W zapytaniu zostały zawarte dwa hasła, które się nie pokrywają.
| -1106 | USERNAME_TOO_SHORT | W zapytaniu została zawarta nazwa użytkownika, która jest za krótka.
| -1107 | USERNAME_TOO_LONG | W zapytaniu została zawarta nazwa użytkownika, która jest za długa.
| -1108 | VERIFY_CODE_INVALID | W zapytaniu został zawarty nieprawidłowy kod weryfikacyjny.
| -1109 | VERIFY_CODE_EXPIRED | W zapytaniu został zawarty kod weryfikacyjny, który wygasł.
| -1110 | EMAIL_EXIST | W zapytaniu został zawarty adres e-mail, który już istnieje.
| -1111 | USERNAME_EXIST | W zapytaniu została zawarta nazwa użytkownika, która już istnieje.
| -1112 | ENUM_INVALID | W zapytaniu został zawarty nieprawidłowy typ danych.