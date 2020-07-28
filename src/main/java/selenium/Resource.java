package selenium;

public class Resource {

    private String name;
    private String entryType;
    private int startTime;
    private int duration;
    private String initiatorType;
    private String nextHopProtocol;
    private int workerStart;
    private int redirectStart;
    private int redirectEnd;
    private int fetchStart;
    private int domainLookupStart;
    private int domainLookupEnd;
    private int connectStart;
    private int connectEnd;
    private int secureConnectionStart;
    private int requestStart;
    private int responseStart;
    private int responseEnd;
    private int transferSize;
    private int encodedBodySize;
    private int decodedBodySize;

    // private int serverTiming:any[];
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEntryType() {
        return entryType;
    }

    public void setEntryType(String entryType) {
        this.entryType = entryType;
    }

    public int getStartTime() {
        return startTime;
    }

    public void setStartTime(int startTime) {
        this.startTime = startTime;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getInitiatorType() {
        return initiatorType;
    }

    public void setInitiatorType(String initiatorType) {
        this.initiatorType = initiatorType;
    }

    public String getNextHopProtocol() {
        return nextHopProtocol;
    }

    public void setNextHopProtocol(String nextHopProtocol) {
        this.nextHopProtocol = nextHopProtocol;
    }

    public int getWorkerStart() {
        return workerStart;
    }

    public void setWorkerStart(int workerStart) {
        this.workerStart = workerStart;
    }

    public int getRedirectStart() {
        return redirectStart;
    }

    public void setRedirectStart(int redirectStart) {
        this.redirectStart = redirectStart;
    }

    public int getRedirectEnd() {
        return redirectEnd;
    }

    public void setRedirectEnd(int redirectEnd) {
        this.redirectEnd = redirectEnd;
    }

    public int getFetchStart() {
        return fetchStart;
    }

    public void setFetchStart(int fetchStart) {
        this.fetchStart = fetchStart;
    }

    public int getDomainLookupStart() {
        return domainLookupStart;
    }

    public void setDomainLookupStart(int domainLookupStart) {
        this.domainLookupStart = domainLookupStart;
    }

    public int getDomainLookupEnd() {
        return domainLookupEnd;
    }

    public void setDomainLookupEnd(int domainLookupEnd) {
        this.domainLookupEnd = domainLookupEnd;
    }

    public int getConnectStart() {
        return connectStart;
    }

    public void setConnectStart(int connectStart) {
        this.connectStart = connectStart;
    }

    public int getConnectEnd() {
        return connectEnd;
    }

    public void setConnectEnd(int connectEnd) {
        this.connectEnd = connectEnd;
    }

    public int getSecureConnectionStart() {
        return secureConnectionStart;
    }

    public void setSecureConnectionStart(int secureConnectionStart) {
        this.secureConnectionStart = secureConnectionStart;
    }

    public int getRequestStart() {
        return requestStart;
    }

    public void setRequestStart(int requestStart) {
        this.requestStart = requestStart;
    }

    public int getResponseStart() {
        return responseStart;
    }

    public void setResponseStart(int responseStart) {
        this.responseStart = responseStart;
    }

    public int getResponseEnd() {
        return responseEnd;
    }

    public void setResponseEnd(int responseEnd) {
        this.responseEnd = responseEnd;
    }

    public int getTransferSize() {
        return transferSize;
    }

    public void setTransferSize(int transferSize) {
        this.transferSize = transferSize;
    }

    public int getEncodedBodySize() {
        return encodedBodySize;
    }

    public void setEncodedBodySize(int encodedBodySize) {
        this.encodedBodySize = encodedBodySize;
    }

    public int getDecodedBodySize() {
        return decodedBodySize;
    }

    public void setDecodedBodySize(int decodedBodySize) {
        this.decodedBodySize = decodedBodySize;
    }

}