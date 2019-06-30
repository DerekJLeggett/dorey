package selenium;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class ReportingListener implements ITestListener {
    private static Logger logger = LoggerFactory.getLogger(PageDriver.class);

    @Override
    public void onStart(ITestContext testContext) {
        logger.info("Starting suite: {}", testContext.getName());
    }

    @Override
    public void onFinish(ITestContext testContext) {
        logger.info("PASSED TEST CASES");
        testContext.getPassedTests().getAllResults().forEach(result -> {
            logger.info(result.getName());
        });

        logger.info("FAILED TEST CASES");
        testContext.getFailedTests().getAllResults().forEach(result -> {
            logger.info(result.getName());
        });

        logger.info("Test completed on: " + testContext.getEndDate().toString());
    }

    @Override
    public void onTestSuccess(ITestResult testResult) {
        logger.info("Test passed: {}", testResult.getName());
    }

    @Override
    public void onTestSkipped(ITestResult testResult) {
        logger.info("Test skipped: {}", testResult.getName());
    }

    @Override
    public void onTestStart(ITestResult testResult) {
        logger.info("Starting test: {}", testResult.getName());
    }

    @Override
    public void onTestFailure(ITestResult testResult) {
        logger.info("Test failed: {}", testResult.getName());
    }

    @Override
    public void onTestFailedButWithinSuccessPercentage(ITestResult testResult) {

    }
}