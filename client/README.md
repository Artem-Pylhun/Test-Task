CREATE TABLE IF NOT EXISTS public."Rates"
(
    rates_id integer SERIAL,
    date timestamp without time zone NOT NULL,
    currency character varying(3) COLLATE pg_catalog."default",
    rate numeric,
    CONSTRAINT "Rates_pkey" PRIMARY KEY (rates_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Rates"
    OWNER to postgres;
