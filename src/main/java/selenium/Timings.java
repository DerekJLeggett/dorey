package selenium;

public class Timings {
    Double networkLatency;
    Double pageLoadTime;
    Double redirectTime;
    Double completeTime;
    Double timeToFirstByte;
    Double timeToLastByte;
    Double timeToInteract;
    Double docLoaded;

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

    public Double getTimeToFirstByte() {
        return timeToFirstByte;
    }

    public void setTimeToFirstByte(Double timeToFirstByte) {
        this.timeToFirstByte = timeToFirstByte;
    }

    public Double getTimeToLastByte() {
        return timeToLastByte;
    }

    public void setTimeToLastByte(Double timeToLastByte) {
        this.timeToLastByte = timeToLastByte;
    }

    public Double getTimeToInteract() {
        return timeToInteract;
    }

    public void setTimeToInteract(Double timeToInteract) {
        this.timeToInteract = timeToInteract;
    }

    public Double getDocLoaded() {
        return docLoaded;
    }

    public void setDocLoaded(Double docLoaded) {
        this.docLoaded = docLoaded;
    }
}