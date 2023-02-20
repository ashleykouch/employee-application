package io.nology.employeeAppbackend;

import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


// TODO: ask about extension
@ExtendWith(SpringExtension.class)
@SpringBootTest
@SpringJUnitConfig
@AutoConfigureMockMvc
public class EmployeeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void getAllTest() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/employees")).andExpect(status().isOk());
    }

    @Test
    public void getByIdTest() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("employee/1")).andExpect(status().isOk());
    }
}
