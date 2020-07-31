package selenium;

public class Browser {
    String id;
    Name name;
    String version;
    Location location;

    enum Location {
        LOCALHOST, GRID;

        private Location() {
        }
    }

    enum Name {
        CHROME, FIREFOX, EDGE, OPERA, SAFARI;

        private Name() {
        }
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public Name getName() {
        return this.name;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Location getLocation() {
        return this.location;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }
}
