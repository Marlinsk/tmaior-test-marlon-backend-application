## Descripion

The github actions processes are separated as follows

- **CI Tests:** Run the unit tests for the code after pushing the code to GitHub on any branch.
- **Build pipeline:** Execute the steps to build the Docker image, send the image to the Docker repository, and access the cloud through a GitHub-hosted worker in the environment to update the container with the new image released in the Docker repository.
