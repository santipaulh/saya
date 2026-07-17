# CHANGELOG

Todas las modificaciones importantes del proyecto serán documentadas aquí.

## v0.1.2 - 2026-07-17
### Added
- GET `/auth/login`
- GET `/auth/register`
- GET `/auth/recover-password`


## v0.1.1 - 2026-07-17
### Added
- Diseño inicial del modelo de base de datos (tablas cortesía)
    - `app_user` (user_id)
    - `app_user_metadata` (user_id, name, pfp)
    - `app_user_authentication`
    - `app_club` (club_id)
    - `app_club_user` (club_id, user_id)
- Creación del API NestJS
- Esquematización de la base de datos por PostgreSQL

### Deleted
- Pausa total de Botketing CRM bajo backup completo:
    - `frontend-next` (NextJS)
    - `backend-api` (Express REST API)
    - `backend-cronworkers` (Express + Cron)
    - `backend-oauth` (Express + Meta webhooks)
    - `backup.sql` (PostgreSQL dump)

## v0.1.0 - 2026-07-17
### Added
- Definición inicial del proyecto 'Saya'
- Arquitectura inicial definida (FullStack)
- Definición del sistema de licencias y facturación interna
