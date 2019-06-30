package selenium;

public class Timings {
    Double networkLatency;
    Double pageLoadTime;
    Double redirectTime;
    Double completeTime;

    public void setNetworkLatency(Double networkLatency) {
        this.networkLatency = networkLatency;
    }

    public Double getNetworkLatency() {
        return this.networkLatency;
    }

    public void setPageLoadTime(Double pageLoadTime) {
        this.pageLoadTime = pageLoadTime;
    }

    public Double getPageLoadTime() {
        return this.pageLoadTime;
    }

    public void setRedirectTime(Double redirectTime) {
        this.redirectTime = redirectTime;
    }

    public Double getRedirectTime() {
        return this.redirectTime;
    }

    public void setCompleteTime(Double completeTime) {
        this.completeTime = completeTime;
    }

    public Double getCompleteTime() {
        return this.completeTime;
    }
}