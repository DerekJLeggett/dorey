package selenium;

import java.util.ArrayList;
import java.util.List;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class ReportingListener implements ITestListener {
    private static Logger logger = LoggerFactory.getLogger(ReportingListener.class);
    Utility utility = new Utility();
    public static Integer testSuiteId;
    public static Integer testCaseId;

    @Override
    public void onStart(ITestContext testContext) {
        logger.info("Starting suite: {}", testContext.getName());
        List<NameValuePair> urlParameters = new ArrayList<NameValuePair>();
        urlParameters.add(new BasicNameValuePair("name", testContext.getName()));
        testSuiteId = Integer.parseInt(
                utility.sendPost(StartUp.props.getProperty("baseUrl") + "/api/addTestSuite.php", urlParameters));
        logger.info("Test Suite Id: {}", testSuiteId);
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
        for (Object parameter : testResult.getParameters()) {
            logger.info("Paramter: {}", parameter.toString());
        }
        logger.info("Test passed: {}", testResult.getName());
        testCaseId = Integer.parseInt(utility.logTestCase(testResult, testSuiteId.toString(), "1", StartUp.browser,
                StartUp.operatingSystem, StartUp.props.getProperty("baseUrl")));
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
        utility.logTestCase(testResult, testSuiteId.toString(), "0", StartUp.browser, StartUp.operatingSystem,
                StartUp.props.getProperty("baseUrl"));
    }

    @Override
    public void onTestFailedButWithinSuccessPercentage(ITestResult testResult) {

    }

}