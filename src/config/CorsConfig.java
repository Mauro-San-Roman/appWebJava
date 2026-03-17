import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Aplica a todas tus rutas (/api/inicio, /api/servicios, etc.)
                        .allowedOrigins("*") // Permite que cualquier página (como tu GitHub Pages) acceda
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Permite estos métodos
                        .allowedHeaders("*");
            }
        };
    }
}