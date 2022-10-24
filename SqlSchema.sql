-- Table: public.cart

-- DROP TABLE IF EXISTS public.cart;

CREATE TABLE IF NOT EXISTS public.cart
(
    id character varying(100) COLLATE pg_catalog."default",
    titulo character varying(100) COLLATE pg_catalog."default",
    price character varying(100) COLLATE pg_catalog."default",
    total character varying(100) COLLATE pg_catalog."default",
    qtd character varying(100) COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.cart
    OWNER to postgres;