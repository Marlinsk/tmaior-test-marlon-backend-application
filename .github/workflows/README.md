## Descripion

The github actions processes are separated as follows

- **CI Tests:** Run the unit tests for the code after pushing the code to GitHub on any branch.
- **Build pipeline:** When the develop branch receives a push, the pipeline runs unit tests and then a build generation test. Moving to the main branch, when it receives a push, it performs the steps to create the Docker image build, sends the image to the Docker cloud repository, accesses the cloud via a GitHub-hosted environment worker to update the container with the new image released in the Docker repository.
