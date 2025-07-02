if yarn --version >/dev/null 2>&1; then
  echo "Yarn is already installed"
  echo yarn --version
else
  echo "Installing Yarn"
  curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
fi

yarn install
