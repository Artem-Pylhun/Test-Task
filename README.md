# Client env #
- **REACT_APP_API_URL=http://localhost**
- **REACT_APP_API_PORT=5000**
- **REACT_APP_API_ENDPOINT=getExchangeRates**

# Server env #
- **DATABASE_URL=postgres://postgres:Admin$23@localhost:5432/testDB**
- **RAPIDAPI_KEY=c46d333169msh6772904821ca725p19a455jsn41c4c74bef41**

# Database Creation #
-- Table: public.Rates

CREATE TABLE IF NOT EXISTS public."Rates"
(
rates_id integer SERIAL PRIMARY KEY,
date timestamp without time zone NOT NULL,
currency character varying(3) COLLATE pg_catalog."default",
rate numeric
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Rates"
OWNER to postgres;