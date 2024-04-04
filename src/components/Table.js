import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: [
                { id: '1', name: 'Apel' },
                { id: '2', name: 'Jeruk' }
            ],
            addedFruit: { id: '1', name: 'Apel' },
        };

        // Binding method
        this.setId = this.setId.bind(this);
        this.setName = this.setName.bind(this);
        this.addData = this.addData.bind(this);
    }

    setId(e) {
        this.setState({ addedFruit: { id: e.target.value, name: this.state.addedFruit.name } });
    }

    setName(e) {
        this.setState({ addedFruit: { id: this.state.addedFruit.id, name: e.target.value } });
    }

    addData() {
        let newFruits = this.state.fruits;
        let newFruit = { "id": this.state.addedFruit.id, "name": this.state.addedFruit.name };
        newFruits.push(newFruit);
        this.setState({ fruits: newFruits });
        this.setState({ addedFruit: newFruit });
    }

    renderTableData() {
        let rows = [];
        this.state.fruits.forEach(fruitObject => {
            const { id, name } = fruitObject;
            rows.push(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                </tr>
            );
        });
        return rows;
    }

    render() {
        return (
            <div className="body">
                <h1 id='title'>{this.props.judul}</h1>
                <table id='fruits'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama Buah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>

                <div style={styles.container}>
                    ID: <input type="text" onChange={this.setId} name="id"></input>
                    <span>&nbsp;</span> <span>&nbsp;</span>
                    Nama Buah: <input type="text" onChange={this.setName} name="name"></input>
                    <span>&nbsp;</span>
                    <button onClick={this.addData}>Tambah</button>
                </div>

                <div style={styles.container}>
                    Baru Saja ditambahkan:
                    <br></br>ID: <span>{this.state.addedFruit.id}</span>
                    <br></br>Nama Buah: <span>{this.state.addedFruit.name}</span>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        border: '1px solid black',
        padding: '10px',
        marginTop: '20px'
    }
};

export default Table;