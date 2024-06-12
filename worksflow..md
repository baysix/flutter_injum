name: CI/CD hdev_client to AWS S3

on:
push:
branches: - dev

jobs:
deploy:
runs-on: ubuntu-latest
steps: - name: Checkout code
uses: actions/checkout@v4.1.1

      - name: Set up AWS IAM credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Cache node modules
        uses: actions/cache@v4.0.0
        with:
          path: |
            node_modules
          key: ${{ runner.OS }}-build-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.OS }}-build-
            ${{ runner.OS }}--

      - name: Cache Webpack
        uses: actions/cache@v4.0.0
        with:
          path: |
            .cache/webpack
          key: ${{ runner.OS }}-webpack-${{ hashFiles('**/package-lock.json', '**/webpack.config.js') }}
          restore-keys: |
            ${{ runner.OS }}-webpack-

      - name: Install dependencies and build
        run: |
          npm install
          npm run build:dev

      - name: Upload to AWS S3
        run: aws s3 sync dist/ s3://${{ secrets.AWS_S3_BUCKET_NAME }}
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

      - name: Invalidate CloudFront Distribution
        run: aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
