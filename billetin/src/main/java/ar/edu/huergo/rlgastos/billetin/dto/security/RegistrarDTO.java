package ar.edu.huergo.rlgastos.billetin.dto.security;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record RegistrarDTO(

        @NotBlank(message = "El nombre es requerido")
        String nombre,

        @NotBlank(message = "El email es requerido")
        @Email(message = "Debe ser un email válido")
        String username,

        @NotBlank(message = "La contraseña es requerida")
        String password,

        @NotBlank(message = "La verificación es requerida")
        String verificacionPassword

) {}

