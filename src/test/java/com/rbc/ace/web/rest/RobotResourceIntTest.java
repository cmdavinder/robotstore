package com.rbc.ace.web.rest;

import com.rbc.ace.RobotstoreApp;
import com.rbc.ace.domain.Robot;
import com.rbc.ace.repository.RobotRepository;
import com.rbc.ace.web.rest.errors.ExceptionTranslator;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.math.BigDecimal;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the RobotResource REST controller.
 *
 * @see RobotResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = RobotstoreApp.class)
public class RobotResourceIntTest {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final BigDecimal DEFAULT_PRICE = new BigDecimal(1);
    private static final BigDecimal UPDATED_PRICE = new BigDecimal(2);

    @Autowired
    private RobotRepository robotRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restRobotMockMvc;

    private Robot robot;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        RobotResource robotResource = new RobotResource(robotRepository);
        this.restRobotMockMvc = MockMvcBuilders.standaloneSetup(robotResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Robot createEntity(EntityManager em) {
        Robot robot = new Robot();
        robot.setName(UPDATED_NAME);
        robot.setDescription(UPDATED_DESCRIPTION);
        robot.setPrice(UPDATED_PRICE);
        return robot;
    }

    @Before
    public void initTest() {
        robot = createEntity(em);
    }

    @Test
    @Transactional
    public void createRobot() throws Exception {
        int databaseSizeBeforeCreate = robotRepository.findAll().size();

        // Create the Robot
        restRobotMockMvc.perform(post("/api/robots")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(robot)))
            .andExpect(status().isCreated());

        // Validate the Robot in the database
        List<Robot> robotList = robotRepository.findAll();
        assertThat(robotList).hasSize(databaseSizeBeforeCreate + 1);
        Robot testRobot = robotList.get(robotList.size() - 1);
        assertThat(testRobot.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testRobot.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testRobot.getPrice()).isEqualTo(DEFAULT_PRICE);
    }

    @Test
    @Transactional
    public void createRobotWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = robotRepository.findAll().size();

        // Create the Robot with an existing ID
        robot.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restRobotMockMvc.perform(post("/api/robots")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(robot)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Robot> robotList = robotRepository.findAll();
        assertThat(robotList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllRobots() throws Exception {
        // Initialize the database
        robotRepository.saveAndFlush(robot);

        // Get all the robotList
        restRobotMockMvc.perform(get("/api/robots?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(robot.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
            .andExpect(jsonPath("$.[*].price").value(hasItem(DEFAULT_PRICE.intValue())));
    }

    @Test
    @Transactional
    public void getRobot() throws Exception {
        // Initialize the database
        robotRepository.saveAndFlush(robot);

        // Get the robot
        restRobotMockMvc.perform(get("/api/robots/{id}", robot.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(robot.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME.toString()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION.toString()))
            .andExpect(jsonPath("$.price").value(DEFAULT_PRICE.intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingRobot() throws Exception {
        // Get the robot
        restRobotMockMvc.perform(get("/api/robots/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateRobot() throws Exception {
        // Initialize the database
        robotRepository.saveAndFlush(robot);
        int databaseSizeBeforeUpdate = robotRepository.findAll().size();

        // Update the robot
        Robot updatedRobot = robotRepository.findOne(robot.getId());
        updatedRobot.setName(UPDATED_NAME);
        updatedRobot.setDescription(UPDATED_DESCRIPTION);
        updatedRobot.setPrice(UPDATED_PRICE);

        restRobotMockMvc.perform(put("/api/robots")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedRobot)))
            .andExpect(status().isOk());

        // Validate the Robot in the database
        List<Robot> robotList = robotRepository.findAll();
        assertThat(robotList).hasSize(databaseSizeBeforeUpdate);
        Robot testRobot = robotList.get(robotList.size() - 1);
        assertThat(testRobot.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testRobot.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testRobot.getPrice()).isEqualTo(UPDATED_PRICE);
    }

    @Test
    @Transactional
    public void updateNonExistingRobot() throws Exception {
        int databaseSizeBeforeUpdate = robotRepository.findAll().size();

        // Create the Robot

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restRobotMockMvc.perform(put("/api/robots")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(robot)))
            .andExpect(status().isCreated());

        // Validate the Robot in the database
        List<Robot> robotList = robotRepository.findAll();
        assertThat(robotList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteRobot() throws Exception {
        // Initialize the database
        robotRepository.saveAndFlush(robot);
        int databaseSizeBeforeDelete = robotRepository.findAll().size();

        // Get the robot
        restRobotMockMvc.perform(delete("/api/robots/{id}", robot.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Robot> robotList = robotRepository.findAll();
        assertThat(robotList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Robot.class);
        Robot robot1 = new Robot();
        robot1.setId(1L);
        Robot robot2 = new Robot();
        robot2.setId(robot1.getId());
        assertThat(robot1).isEqualTo(robot2);
        robot2.setId(2L);
        assertThat(robot1).isNotEqualTo(robot2);
        robot1.setId(null);
        assertThat(robot1).isNotEqualTo(robot2);
    }
}
