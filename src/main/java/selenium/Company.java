package selenium;

public class Company {
    String id;
    String code;
    String company;
    String url;
    String industry;

    @Override
    public String toString() {
        return "CompanyData{" + "id='" + id + '\'' + ", code='" + code + '\'' + ", company='" + company + '\''
                + ", url=" + url + '\'' + ", industry='" + industry + '}';
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCompany() {
        return this.company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getIndustry() {
        return this.industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }
}